import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";

export const UserDataContext = createContext();

export function UserDataProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const getUsers = async () => {
    const appUsers = await axios.get("list.json");
    // console.log(appUsers);
    setUsers(appUsers.data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const handleQuery = (e) => {
    let command = e.key === "Enter" || e.type === "click";

    if (command && searchTerm.length >= 4) {
      const options = {
        ignoreFieldNorm: true,
        includeScore: true,
        minMatchCharLength:
          searchTerm.length > 4 ? searchTerm.length - 1 : searchTerm.length,

        keys: [
          {
            name: "name",
            weight: 0.6,
          },
          {
            name: "username",
            weight: 0.4,
          },
        ],
      };

      const fuse = new Fuse(users, options);
      const result = fuse.search(`^='${searchTerm}`);
      console.log("result", result);
      setResults(result);
      // console.log(users);
      return;
    }
    setSearchTerm(e.target.value);
  };

  return (
    <UserDataContext.Provider value={{ results, searchTerm, handleQuery }}>
      {children}
    </UserDataContext.Provider>
  );
}
