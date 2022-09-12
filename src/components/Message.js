import React from "react";
import "../styles/message.scss";

export default function Messsage({ data }) {
  return (
    <div className={data.user === "User" ? "inner alignRight" : "inner alignLeft"}>
      <p className="message">{data.value}</p>
      <p className="date">
        {data.date} {data.time}
      </p>
    </div>
  );
}
