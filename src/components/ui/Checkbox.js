import React from "react";

export default function Checkbox({ inputId, title, ...attribute }) {
  return (
    <>
      <input id={inputId} className="w-4 h-4" {...attribute} />
      <label htmlFor={inputId} className="ml-2 text-sm">
        {title}
      </label>
    </>
  );
}
