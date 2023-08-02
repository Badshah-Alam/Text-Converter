import React, { useState } from "react";

export default function Dataform(props) {
  const [text, setText] = useState("Enter the text");

  const { mode, textDesigner } = props;

  const uppercaseconverter = () => {
    const newValue = text.toUpperCase();
    setText(newValue);
  };

  const lowercaseconverter = () => {
    const newValue = text.toLowerCase();
    setText(newValue);
  };

  const capitalizer = () => {
    const newValue = text[0].toUpperCase() + text.slice(1);
    setText(newValue);
  };

  const valueChanger = (e) => {
    let v = e.target.value;
    setText(v);
  };

  const upperCaseCounter = () => {
    let uppercase = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (text[i] == text[i].toUpperCase()) {
          uppercase += 1;
        }
      }
    }
    return uppercase;
  };

  const lowerCaseCounter = () => {
    let lowercase = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (text[i] == text[i].toLowerCase()) {
          lowercase += 1;
        }
      }
    }
    return lowercase;
  };

  const extraSpaceRemover = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const copy = () => {
    let data_element = document.querySelector("textarea");
    let value = data_element.value;
    console.log(value);
    data_element.select();
    navigator.clipboard.writeText(value);
  };

  // DOM Manipulation -> SELECT ==> Change

  const vowelConsonantCounter = () => {
    const vowels = ["a", "e", "i", "o", "u"];
    let vowel_count = 0;
    let consonant_count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] !== " ") {
        if (vowels.includes(text[i].toLowerCase())) {
          vowel_count++;
        } else {
          consonant_count++;
        }
      }
    }
    return {
      vowels: vowel_count,
      consonants: consonant_count,
    };
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div className="container">
      <h1 className={`my-3 display-4 ${textDesigner()}`}>
        Please Enter Your Text Here
      </h1>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        className={`form-control bg-${mode} ${textDesigner()}`}
        value={text}
        onChange={valueChanger}
      ></textarea>
      <button className="m-3 btn btn-info" onClick={uppercaseconverter}>
        Convert to Uppercase
      </button>
      <button className="m-3 btn btn-info" onClick={lowercaseconverter}>
        Convert to lowercase
      </button>
      <button className="m-3 btn btn-info" onClick={capitalizer}>
        Capitalize text
      </button>
      <button className="m-3 btn btn-info" onClick={extraSpaceRemover}>
        Remove Extra Spaces
      </button>
      <button className="m-3 btn btn-danger" onClick={clearText}>
        Clear text
      </button>
      <button className="m-3 btn btn-success" onClick={copy}>
        Copy text
      </button>

      <h2 className={`my-3 display-4 ${textDesigner()}`}>Results: </h2>
      <hr />
      <table className={`table table-striped ${textDesigner()}`}>
        <tr>
          <th>Total no. of characters: </th>
          <td>{text.length}</td>
        </tr>

        <tr>
          <th>Uppercase characters: </th>
          <td>{upperCaseCounter()}</td>
        </tr>

        <tr>
          <th>Lowercase characters: </th>
          <td>{lowerCaseCounter()}</td>
        </tr>

        <tr>
          <th>Vowels: </th>
          <td>{vowelConsonantCounter().vowels}</td>
        </tr>

        <tr>
          <th>Consonants: </th>
          <td>{vowelConsonantCounter().consonants}</td>
        </tr>
      </table>
    </div>
  );
}

// dark -> light -> dark
