import React from "react";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.search_input_container}>
          <img
            src="searchIcon.svg"
            alt="Search Icon"
            className={styles.search_icon}
          />
          <input type="text" className={styles.search_input} />
        </div>
        <nav className={styles.nav_container}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>Categories</li>
            <li className={styles.nav_item}>Website Builders</li>
            <li className={styles.nav_item}>Today's deals</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
