import React from "react";
import ContentLoader from "react-content-loader";
import "./UserLoader.scss"

const UserLoader = () => {
  return (
    <li>
      <article className="user-loader">
        <div className="user-loader__avatar" />
        <div className="user-loader__info">
          <div className="user-loader__name" />
          <div className="user-loader__about" />
        </div>
      </article>
    </li>
  );
};

export default UserLoader;
