import React from "react";
// import ReactDOM from "react-dom";
import "../../common/unit.js";
import "./index.less";
// const publicIp = require("public-ip");
// const internalIp = require("internal-ip");
// import bg from "./image/0202.png";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Text: null
    };
    // this.loadComponent = this.loadComponent.bind(this);
  }

  componentDidMount() {
    //   (async () => {
    // console.log(
    // publicIp.v4().then(res => {
    //   console.log(res);
    // });
    // console.log(internalIp.v4.sync());
    // );
    //=> '46.5.21.123'
    //   console.log(await publicIp.v6());
    //   //=> 'fe80::200:f8ff:fe21:67cf'
    // })();
  }

  loadComponent() {
    import("./text.js").then(Text => {
      this.setState({
        Text: Text.default
      });
    });
  }

  render() {
    const { Text } = this.state;
    return (
      <div className="search">
        search pages
        <div onClick={this.loadComponent.bind(this)}>12333</div>
        {Text ? <Text /> : null}
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));
