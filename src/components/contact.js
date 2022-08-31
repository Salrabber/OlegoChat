import React from "react";
import "../styles/contact.scss"

export default function Contact({data}) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">
        {data.message}
        </p>
      </div>
    </div>
  );
}
