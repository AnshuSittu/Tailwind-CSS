import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namste Food App</h2>
        <UserClass name={"First"} location="Pune" />
      </div>
    );
  }
}

export default About;
