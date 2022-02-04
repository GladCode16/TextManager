import React, { useState } from "react";

export default function TextFrom(props) {
  function handleOnChange(element) {
    console.log("Text is changing");
    setText(element.target.value);
  }
  function handleUpClick() {
    console.log("Button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case ", 'success')
  }
  function handleLoClick() {
    console.log("Button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case ", 'success')
  }
  function handleClrClick() {
    setText("");
  }
  function handleExtraSpace() {
    props.showAlert("All extra space has been removed", 'success')
    setText(text.replace(/\s+/g, ' ').trim())
    
  }
  function CopyText() {
    navigator.clipboard.writeText( document.querySelector("textarea").value);
    setText(document.querySelector("textarea").value)
    props.showAlert("Text copied to clipboard", 'success')
  }
  function PasteText() {
    navigator.clipboard.readText().
    then((newText)=>{
       setText(text + newText)
      props.showAlert("Text paste succesfully", 'success')
    });
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="my-3">
          <textarea
            className={`form-control bg-${props.mode} text-${props.mode === 'light'?"dark":"light"}`}
            id="myBox"
            cols="30"
            rows="10"
            value = {text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={handleUpClick}>Uppercase all</button>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={handleLoClick}>Lowercase all</button>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={handleClrClick}>Clear all</button>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={handleExtraSpace}>Remove extra spaces</button>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={CopyText}>Copy text</button>
        <button className={`btn btn-${props.btnCol} mx-2`} onClick={PasteText}>Paste text</button>
      </div>
      <div className="container  my-4">
        <h2>Your text summary is here</h2>
        <p>{text.split(" ").length} and {text.length}</p>
        <h5>You need {Math.floor(0.00066666666 * text.length)} Minutes to read this</h5>
        <h2>Preview</h2>
        <div>{text}</div>
      </div>
    </>
  );
}
