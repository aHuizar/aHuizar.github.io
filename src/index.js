import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import $ from "jquery";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// This snippet of code just collapses navbar after clicking on Navlink, if it's showing
$("#navbarSupportedContent li a").on("click", function () {
  if (!$(this).hasClass("dropdown-toggle")) {
    if ($("#navbarSupportedContent").hasClass("show")) {
      $("#navbarSupportedContent").slideUp("fast", function () {
        $("#navbarSupportedContent").removeClass("show");
        $("#navbarSupportedContent").attr("style", null);
      });
    }
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
