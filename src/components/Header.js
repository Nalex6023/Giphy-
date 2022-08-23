import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img src="./images/giphyLogo.png" alt="logo" />
      <div className="menu">
        <h2>Reactions</h2>
        <h2>Entertaiment</h2>
        <h2>Sports</h2>
        <h2>Stickers</h2>
        <h2>Artist</h2>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="btns">
        <button>Upload</button>
        <button>Create</button>
      </div>
      <div className="profile">
        <img src="./images/avatar.png" alt="avatar" />
        <h2>Narcis</h2>
      </div>
    </div>
  );
};

export default Header;
