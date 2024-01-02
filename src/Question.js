import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/fontawesome-free-solid";

export default function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState("false");

  return (
    <div className="question">
      <h3>{question} </h3>
      <button
        className={isOpen ? "arrow-button" : "arrow-button button-rotate"}
      >
        <FontAwesomeIcon
          icon={faArrowCircleDown}
          onClick={() => setIsOpen((open) => !open)}
        />
      </button>
      <p className={isOpen ? "answer hide" : "answer reveal"}>{answer}</p>
    </div>
  );
}
