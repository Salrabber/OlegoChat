import React from "react";
import "../styles/contact.scss";

export default function Contact({ data }) {
  const selected = data.selected === data.name;

  return (
    <div className="card">
      <div className={selected ? 'selected':''}>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text">{data.message}</p>
        </div>
      </div>
    </div>
  );
}
