import UserClass from "./UserCard/UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class Contact extends React.Component {
  constructor(props) {
    super();
    console.log("Inside the About Constructor");
  }

  componentDidMount() {
    console.log("Mount of About");
  }
  render() {
    console.log("About Render");
    return (
      <div className="w-[50%] m-auto mt-4">
        <h2 className="text-lg font-bold text-gray-600">Developer Details</h2>
        <UserContext.Provider value={{ userName: "ElonMask", age: 32 }}>
          <UserClass />
        </UserContext.Provider>
      </div>
    );
  }
}

export default Contact;
