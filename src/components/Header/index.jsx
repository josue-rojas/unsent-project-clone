import React from "react";
import styles from "./styles.module.css";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const Header = () => {
  const location = useLocation();

  return (
    <div className={styles.header}>
      <div className={styles.links}>
        <ul>
          <li>
            <Link
              className={classNames({
                [styles.active]: location.pathname === "/"
              })}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={classNames({
                [styles.active]: location.pathname === "/random"
              })}
              to={{ pathname: "/random", state: { refreshDate: false } }}
            >
              Random
            </Link>
          </li>
          <li>
            <a href="https://theunsentproject.com/abouttheunsentproject/">
              #unsentproject
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
