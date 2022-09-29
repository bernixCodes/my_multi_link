import React from "react";
import style from "./index.module.css";
import { useContext } from "react";
import { UserDataContext } from "../../context/UserData";

function Home() {
  const { searchTerm, results, handleQuery } = useContext(UserDataContext);

  return (
    <>
      <div className={style.container}>
        <div className={style.search__container}>
          <input
            type="text"
            className={style.search__input}
            placeholder="Search profiles..."
            onChange={handleQuery}
            value={searchTerm}
            onKeyDown={handleQuery}
          />

          <button className={style.search__btn} onClick={handleQuery}>
            Search
          </button>
          <div className={style.searchIcon} onClick={handleQuery}>
            <span className="material-icons-sharp ">search</span>
          </div>
        </div>
      </div>

      <div className={style.main__user_container}>
        {results?.map((user, index) => (
          <div className={style.user__container} key={index}>
            <div className={style.user__card}>
              <div className={style.user__top}>
                <img
                  src={user.item.avatar}
                  className={style.user__image}
                  alt="no_iage"
                />
                <span className="material-icons-sharp">bookmark_border</span>
              </div>
              <div className={style.user_bottom}>
                <p className={style.user__name}>{user.item.name}</p>
                <p>{user.item.username}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
