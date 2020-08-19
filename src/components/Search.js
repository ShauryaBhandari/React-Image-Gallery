import React, { useState } from "react";

export const Search = ({ settxt }) => {
  const [text, setText] = useState("");
  return (
    <div className="container">
      <form
        className="form text-center"
        onSubmit={(e) => {
          e.preventDefault();
          settxt(text);
        }}
      >
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};
