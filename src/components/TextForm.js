import React, { useState } from "react";
import "./css/TextForm.css";

export default function TextForm({
  heading = "Welcome to Text Utils",
  showAlert,
}) {
  const [text, setText] = useState("");
  const [Nouns, setNouns] = useState(0);
  const [Vowels, setVowels] = useState(0);
  const [Spaces, setSpaces] = useState(0);

  function handleNounsAndVowels() {
    let letterBag = text.split("").filter((letter) => letter !== " ");

    let nounBag = letterBag.filter((letter) =>
      ["a", "e", "i", "o", "u"].includes(letter.toLowerCase())
    );
    let vowelBag = letterBag.filter((letter) => !nounBag.includes(letter));

    // console.log(letterBag);
    // console.log(nounBag);
    // console.log(vowelBag);
    setNouns(nounBag.length);
    setVowels(vowelBag.length);
    setSpaces(text.split("").length - letterBag.length);

    showAlert("Count is ready", "success");
  }

  function clearText() {
    setNouns(0);
    setSpaces(0);
    setVowels(0);
    setText("");
    showAlert("Text Cleared", "success");
  }

  function copyToClipboard() {
    let textBox = document.getElementById("exampleFormControlTextArea1");
    textBox.select();
    navigator.clipboard.writeText(textBox.value);
    showAlert("Copied to Clipboard", "success");
  }
  function removeExtraSpaces() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra Spaces Removed", "success");
  }

  function handleUpperCase() {
    setText((text) => text.toUpperCase());
    showAlert("Converted to Upper Case", "success");
  }
  function handleLowerCase() {
    setText((text) => text.toLowerCase());
    showAlert("Converted to Lower Case", "success");
  }
  return (
    <>
      <div className="contianer">
        <h1>{heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            Enter your text below
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextArea1"
            rows="10"
            placeholder={"Enter Text Here"}
            style={{ border: "2px solid black" }}
            onChange={(event) => setText(event.target.value)}
            value={text}
          ></textarea>

          <div className="container my-3">
            <button className="btn btn-primary m-3" onClick={handleUpperCase}>
              Convert to Upper Case
            </button>

            <button className="btn btn-primary m-3" onClick={handleLowerCase}>
              Convert to Lower Case
            </button>

            <button className="btn btn-primary m-3" onClick={clearText}>
              Clear Text
            </button>

            <button
              className="btn btn-primary m-3"
              onClick={handleNounsAndVowels}
            >
              Count Nouns and Vowels
            </button>

            <button className="btn btn-primary m-3" onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
            <button className="btn btn-primary m-3" onClick={removeExtraSpaces}>
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="contianer my-3">
        <h1>Your Text Summary</h1>
        <table className="text-stats-table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Words</td>
              <td>
                {text.length === 0
                  ? 0
                  : text.split(" ").filter((letter) => letter !== "").length}
              </td>
            </tr>
            <tr>
              <td>Characters</td>
              <td>{text.length}</td>
            </tr>
            <tr>
              <td>Can be read in</td>
              <td>
                {text.length === 0
                  ? 0
                  : (0.008 * text.split(" ").length).toFixed(2)}{" "}
                minutes
              </td>
            </tr>
            <tr>
              <td>Nouns</td>
              <td>{Nouns}</td>
            </tr>
            <tr>
              <td>Vowels</td>
              <td>{Vowels}</td>
            </tr>
            <tr>
              <td>Spaces</td>
              <td>{Spaces}</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h3 className="my-3">Preview</h3>
        <p
          style={{
            textAlign: "justify",
            overflow: "auto",
            maxHeight: "300px",
            border: "5px solid green",
            borderRadius: "5px",
            padding: "10px",
            backgroundColor: "white",
            color: "black",
          }}
        >
          {text.length <= 0
            ? "Enter something in the textbox above to preview it here"
            : text}
        </p>
      </div>
      <hr />
    </>
  );
}
