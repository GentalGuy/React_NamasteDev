import React from "react";

class UserClass extends React.Component {
  constructor(prop) {
    super(prop);
    console.log(prop);
  }

  render() {
    return (
      <div>
        <h2>Name: Gurkirat</h2>
        <h3>Location: Mississauga</h3>
        <h4>Contact:@gurkirat3</h4>
      </div>
    );
  }
}

export default UserClass;
