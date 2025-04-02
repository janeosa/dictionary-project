import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <div className="definition">
            <strong>Definition: </strong>
            {props.meaning.definition}
          </div>
          <br />
          <div className="example">
            <Example example={props.meaning.example} />
          </div>
          <div className="synonyms">
            <Synonyms synonyms={props.meaning.synonyms} />
          </div>
        </p>
      </div>
    </div>
  );
}
