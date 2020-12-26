import React from "react";
import Card from "../Card/Card";
import Clickable from "../Clickable/Clickable";

import "./searchbar.css";
export default function SearchBar(props) {
  return (
    <div className="search_field">
      <i className="fa fa-search ml20" />
      <input className="search" {...props} />
     
    </div>
  );
}
