import './App.css';

// function NumberList() {
//   const numbers = [1, 2, 3, 4, 5];
//   const listItems = numbers.map((number,index) =>
//     <li key={index}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// export {NumberList}

const App = () => {
  const [counter, setCounter] = useState(1);
  const [list, setList] = useState([
    {
      id: counter,
    },
  ]);

  const addToStart = () => {
    const newId = counter + 1;
    setCounter(newId);
    setList((oldArray) => [
      {
        id: newId,
      },
      ...oldArray,
    ]);
  };

  const addToEnd = () => {
    const newId = counter + 1;
    setCounter(newId);
    setList((oldArray) => [
      ...oldArray,
      {
        id: newId,
      },
    ]);
  };

  return (
    <div className="App">
      <button onClick={addToStart}>Add To Start</button>
      <button onClick={addToEnd}>Add To End</button>
      <table>
        <tr>
          <th>Id</th>
          <th>Item</th>
        </tr>
        {list.map((item, index) => (
          <tr key={index}>
            <td>
              <label>{item.id}</label>
            </td>
            <td>
              <input />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

// export {App}