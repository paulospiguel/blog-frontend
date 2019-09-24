import React, { Component } from 'react';
import ClockNow from "react-clock";
// import { Container } from './styles';

export default class Clock extends Component {
  state = {
    date: new Date()
  };


  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }


  render() {
    return (<div style={{background: "#fff", borderRadius: "50%"}}><ClockNow value={this.state.date}/></div> );
  }
}
