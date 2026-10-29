//@ts-nocheck
 import  React, { Component } from "react"

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {//property
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }

  changeDetail = () => {
    this.setState({color: "blue"});
    this.state = {
      brand: "Tesla",
      model: "Mode S",
      color: "blu" ,
      year: 2023
    };
  }

 
componentDidMount() {
    console.log("componentDidMount")
    //runs after first rander => RETRIVE DATA FROM BACKEND SERVER 
}

componentWillUnmount() {
    console.log("componentWillUnmount()")
    //runs before component ummount
}
  
componentDidUpdate() {}







  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeDetail}
        >Change Detail</button>
      </div>
    );
  }
}

export default  Test;