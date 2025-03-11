"use client";

import React from "react";
import styles from "./accordion.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Libre_Baskerville, Roboto } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

interface AccordionItemProps {
  title: string;
  titleSpan: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  title,
  titleSpan,
  content,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className={styles.accordion_container}>
      <div className={styles.accordion_item} onClick={onClick}>
        <p>
          {title}
          <span className={styles.titleEmp}>{titleSpan}</span>
        </p>
        <div className={isOpen ? styles.icons_open : styles.icons_closed}>
          {isOpen ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </div>
      </div>
      <div className={isOpen ? styles.content_open : styles.content_closed}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  const items: { title: string; titleSpan: string; content: string }[] = [
    {
      title: "What's the ",
      titleSpan: "message?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos facilis consequuntur ipsum, eligendi dolore mollitia iusto, quos eaque commodi delectus architecto! Modi pariatur ea autem omnis explicabo facilis quo.",
    },
    {
      title: "What's the ",
      titleSpan: "method?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos facilis consequuntur ipsum, eligendi dolore mollitia iusto, quos eaque commodi delectus architecto! Modi pariatur ea autem omnis explicabo facilis quo.",
    },
    {
      title: "What's the ",
      titleSpan: "motive?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos facilis consequuntur ipsum, eligendi dolore mollitia iusto, quos eaque commodi delectus architecto! Modi pariatur ea autem omnis explicabo facilis quo.",
    },
    {
      title: "What's the ",
      titleSpan: "cost?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dignissimos facilis consequuntur ipsum, eligendi dolore mollitia iusto, quos eaque commodi delectus architecto! Modi pariatur ea autem omnis explicabo facilis quo.",
    },
  ];

  return (
    <div className={styles.main_container}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          titleSpan={item.titleSpan}
          content={item.content}
          isOpen={isOpen === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
