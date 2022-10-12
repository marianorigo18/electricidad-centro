import { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    const { logos } = this.props;
    return (
      <Link to="/">
        <img src={logos[0].img} alt={logos[0].name}></img>
      </Link>
    );
  }
}

export default Logo;
