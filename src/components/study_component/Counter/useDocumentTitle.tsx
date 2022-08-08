import { createElement, useState, useEffect } from 'rax';

const useDocumentTitle = function (title) {
  useEffect(
    () => {
      document.title = title;
    },
    [title],
  );
};

function Example() {
  const [count, setCount] = useState(0);
  useDocumentTitle(`You clicked ${count} times`)

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me!
      </button>
    </div>
  );
}
export default Example;
