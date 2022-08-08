import { createElement, Component } from 'rax';

class Welcome1 extends Component {
  render() {
    return <h1>hello,{this.props.name}</h1>;
  }
}
export default Welcome1;
