import React from "react";
import styles from "./menu.module.css";
import Image from "next/image";
import Accordion from "../Accordion/accordion";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div className={styles.about_keokuk}>
        <h1>Keokuk</h1>
        <h2>Sauk Leader</h2>

        <Image
          src="/keokuk.jpg"
          height={525}
          width={452}
          alt="Picture of Keokuk"
          className={styles.image}
        />
      </div>
      <div className={styles.description}>
        <h2>Chief Keokuk</h2>
        <h3>A man of peace in an age of war</h3>
        <p>
          (INSERT BASIC TEACHINGS OF KEOKUK) Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Quos tenetur recusandae accusantium
          fugiat, nemo iste animi laborum voluptatum qui neque dolor
          perspiciatis, laboriosam vero. Autem suscipit asperiores quasi
          nesciunt eum!
        </p>
        <div className={styles.menu_nav}>
          <h3>What can we learn?</h3>
          <hr />
          <Accordion />
        </div>
      </div>
    </div>
  );
}
