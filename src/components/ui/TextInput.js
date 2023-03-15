import React from "react";

export default function TextInput({ inputId, title, ...attribute }) {
  return (
    <>
      <label htmlFor={inputId}>{title}</label>
      <input required className="text-input" id={inputId} {...attribute} />
    </>
  );
}
