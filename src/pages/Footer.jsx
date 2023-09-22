import { React } from "react";
import "../App.css";

function Footer(props) {
  return (
    <div className="container">
      <ul className="list-group list-group-horizontal justify-content-md-center">
        <li className="list-group-item">
          <a href="https://github.com/FelixFrancisco1776">
            <img src="/github.png" alt="" />
          </a>
        </li>
        <li className="list-group-item">
          <a href="https://www.linkedin.com/in/felix-francisco-jr-71b920184/">
            <img src="/linkedin.png" alt="" />
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
