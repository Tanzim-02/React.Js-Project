import { useState } from "react";

export default function TextEditor(props) {
  
    const {mode,showAlert} =props;

  const [text, setText] = useState("Enter text here");
  const [textCase, setTextCase] = useState("");

  const handleUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    setTextCase("uppercase");
    showAlert("Converted to Uppercase", "success");
  };

  const handleLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    setTextCase("lowercase");
    showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    const newText = "";
    setText(newText);
    showAlert("Text Cleared", "success");
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setTextCase("");
    
  };

  const calculateReadingTime = (text) => {
    const wordsPerMinute = 125;
    const words = text.split(" ").filter((el)=> el.length!==0 ).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
  };

  const removeExtraSpaces = () => {
    const newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    showAlert("Extra Spaces Removed", "success");
  };

  const handleCopy = () => {
    
    navigator.clipboard.writeText(text);
  
    showAlert("Text Copied", "success");
  };

  const renderConvertCaseButton = () => {
    if (textCase === "uppercase") {
      return (
        <button className="btn btn-primary ms-2" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
      );
    } else if (textCase === "lowercase") {
      return (
        <button className="btn btn-primary ms-2" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
      );
    } else {
      return (
        <>
          <button disabled={text.length===0}  className="btn btn-primary " onClick={handleUppercase}>
            Convert to Uppercase
          </button>
          <button disabled={text.length===0} 
            className="btn btn-primary m-1"
            onClick={handleLowercase}
          >
            Convert to Lowercase
          </button>
        </>
      );
    }
  };

  return (
    <>
      <div className="container my-3">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
           <h4 className="mb-2"> {props.heading}</h4>
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="6"
            value={text}
            onChange={handleInputChange}
            style={{
                backgroundColor: mode === "dark" ? "#2e313a" : "white",
                color: mode === "dark" ? "white" : "black",
                
            }}
          ></textarea>
        </div>
        {renderConvertCaseButton()}
        {text.length > 0 && (
          <button disabled={text.length===0}  className="btn btn-danger m-1" onClick={handleClear}>
            Clear
          </button>
        )}
        <button disabled={text.length===0} 
          className="btn btn-primary m-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length===0}  className="btn btn-primary m-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((el)=> el.length!==0 ).length} words &amp; {text.length} characters
        </p>
        <p>{calculateReadingTime(text)} minute(s) to read.</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text: "Enter Something in the textbox" }</p>
      </div>
    </>
  );
}
