import { Button } from "antd";
import React, { Component } from "react";
import "./home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text-red">
        home,
        <Button type="primary">Primary Button</Button>
      </div>
    );
  }
}
