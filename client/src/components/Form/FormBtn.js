import React from "react";

export const FormBtn = props =>
  <button {...props}  className="btn btn-secondary" style={{marginRight: 10}}>
    {props.children}
  </button>;