import { useState } from "react";
import "./User.css";

const User = (props) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <p>Count : {count}</p>
      <p>Count1 : {count1}</p>
      <h1>Name : {props.name}</h1>
      <h3>Location : Delhi</h3>
      <h5>Contact : i_am_deepanshu</h5>
    </div>
  );
};

export default User;
