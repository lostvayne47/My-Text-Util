import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether Dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "#FAF9F6";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FAF9F6";
      document.body.style.color = "#212121";
      showAlert("Light Mode Enabled", "success");
    }
  }

  return (
    <>
      {/* <BrowserRouter>
        <div className="container m-5">
          <NavBar
            title="Text Utilities"
            aboutText="About"
            mode={mode}
            toggleMode={toggleMode}
            showAlert={showAlert}
          />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={<TextForm heading="Welcome!!!" showAlert={showAlert} />}
            />
          </Routes>
          <TextForm heading="Welcome!!!" showAlert={showAlert} />
        </div>
      </BrowserRouter> */}

      <div className="container m-5">
        <NavBar
          title="Text Utilities"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
      </div>
      <div className="contianer my-5">
        <Alert alert={alert} />
        <div className="container my-5">
          <TextForm heading="Welcome!!!" showAlert={showAlert} />
        </div>
      </div>
    </>
  );
}

export default App;
