import React from "react";
import Subscribe from "./components/subscribe";
import Header from "./LangingPage/Header";
import Why from "./LangingPage/Why";
import "./index.sass";
import ReportEmergency from "./components/reportEmergency";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Why /> */}
      <Subscribe />
      <div
        style={{
          marginTop: "5rem",
        }}
      >
        <ReportEmergency />
      </div>
    </div>
  );
}

export default App;
