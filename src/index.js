import ReactDOM from 'react-dom';

const el1 = <span>Привет</span>;
const el2 = <span>Мир</span>;

const jsxEl = (
  <div>
    {el1}

    {el2}
  </div>
);

console.log(jsxEl);

ReactDOM.render(jsxEl, document.querySelector('#root'));
