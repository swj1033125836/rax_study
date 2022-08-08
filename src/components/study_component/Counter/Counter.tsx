import { createElement, useState } from 'rax';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
    </div>
  );
}
export default Counter;
