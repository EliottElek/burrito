import React from "react";
import "./List.scss";

const List = ({ children }) => {
  return <ul className="list">{children}</ul>;
};

export default List;
