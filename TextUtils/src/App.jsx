import { useState } from "react";


import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alet";
import Error from "./components/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const removeBodyClass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-info");
  }

  const toggleMode = (cls) => {
    removeBodyClass();
    document.body.classList.add("bg-"+cls);

    //for primary
    if (cls === "primary") {
      setDarkMode("primary");
      document.body.style.backgroundColor = "#0d6efd";
      document.body.style.color = "white";
      showAlert("Primary Mode has been enabled", "success");

      
    }

    //for success
    else if (cls === "success") {
      setDarkMode("success");
      document.body.style.backgroundColor = "#198754";
      document.body.style.color = "white";
      showAlert("Success Mode has been enabled", "success");
    }
    //for danger
    else if (cls === "danger") {
      setDarkMode("danger");
      document.body.style.backgroundColor = "#dc3545";
      document.body.style.color = "white";
      showAlert("Danger Mode has been enabled", "success");
    }
    //for info
    else if (cls === "info") {
      setDarkMode("info");
      document.body.style.backgroundColor = "#0dcaf0";
      document.body.style.color = "white";
      showAlert("Info Mode has been enabled", "success");
    }
    

    if (mode === "dark") {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been enabled", "success");
      
    } else {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#212223";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      

      
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="about"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />

          <Route exact path="/about" element={<About mode={mode} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
