import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <Example example={props.meaning.example} />
          <br />
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
