import "./styles/style.scss"
import React from "react";
import ReactDOM from "react-dom";
import { ProcessColumn } from "./components/ProcessColumn/ProcessColumn.js";
import { Section } from "./components/Section/Section.js";
import { Board } from "./components/Board/Board.js";

ReactDOM.render(
    <Board/>,
    document.getElementById("root"));