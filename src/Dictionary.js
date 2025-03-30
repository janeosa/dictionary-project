import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiKey = "10tc88b5de8d7eoa39c8f2ea84faadb2";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
