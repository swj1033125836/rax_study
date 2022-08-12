import { createElement } from 'rax';

function Welcome(props) {
  console.log('================');
  console.warn('456');
  console.trace('789');
  console.debug('111');
  console.error('333');
  return <h1>Hello, {props.name}</h1>;
}
export default Welcome;
