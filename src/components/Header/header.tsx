"useclient";
import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <a href="#keokuk">Keokuk</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#donate">Donate</a>
        </li>
        <li>
          <a href="#book">The Book</a>
        </li>
      </ul>
    </div>
  );
}
