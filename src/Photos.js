import React from "react";
import "./Photo.css";
export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="images-text">
          Click on the images to see them in full size
        </div>
        <div className="row">
          {" "}
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  without
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>{" "}
      </section>
    );
  } else {
    return null;
  }
}
