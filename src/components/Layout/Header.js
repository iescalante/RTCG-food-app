import React from "react";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>My Meals</h1>
        <HeaderCardButton onClick={onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1127&q=80"
          alt="table full of delicious food"
        />
      </div>
    </>
  );
};

export default Header;
