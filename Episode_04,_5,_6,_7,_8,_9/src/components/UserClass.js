import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-class">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>count:{count}</h4>
        <button onClick={()=>{
          this.setState({
            count: this.state.count + 1
          })
        }} >Count Increase</button>
      </div>
    );
  }
}

export default UserClass;
