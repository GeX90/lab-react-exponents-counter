const Counter = ({ count, setCount }) => {

  const decrement = () => setCount(prev => prev - 1);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{count}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
