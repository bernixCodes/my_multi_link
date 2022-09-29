import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import style from "./index.module.css";
import LinkIcon from "./link-icon";

import { colors } from "./icon-colors";

function UserInfo() {
  const profile = useLoaderData().data;
  const navigate = useNavigate();

  return (
    <div className={style.user__detail}>
      <span className={style.back} onClick={() => navigate("/")}>
        <span className="material-icons-sharp">arrow_back</span>
      </span>
      <div className={style.user__info}>
        <img src={profile.avatar} alt="" />
        <h2>{profile.name}</h2>
        <p>{profile.bio}</p>
      </div>

      <div className={style.user__links}>
        {profile.links?.map((link, index) => (
          <a href={link.url} target="_blank" className={style.link} key={index}>
            <div
              className={style.user__link}
              onMouseEnter={(e) =>
                (e.target.style.background = colors[link.icon])
              }
              onMouseLeave={(e) => (e.target.style.background = "")}
            >
              <LinkIcon name={link.icon} style={{ color: link.icon }} />
              <p>{link.name}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default UserInfo;
