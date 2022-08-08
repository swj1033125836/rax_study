import { createElement, useState, useEffect } from 'rax';

function CounterByEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
    </div>
  );
}
export default CounterByEffect;
