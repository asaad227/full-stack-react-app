import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Main from "./components/Main";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  rootElement
);

