import React, { useState } from 'react';
import Display from './display'
const Counter = () => {
 const [count, setCount] = useState(0);
 const increment = () => setCount(count + 1);
 const decrement = () => setCount(count - 1);
 return (
 <div>
 <h1 data-testid="count-value">{count}</h1>
 <button onClick={increment}>Increment</button>
 <button onClick={decrement}>Decrement</button>
 <Display count={count} />
 </div>
 );
};
export default Counter;
