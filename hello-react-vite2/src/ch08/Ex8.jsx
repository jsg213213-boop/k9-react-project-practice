import React, { useCallback, useState } from 'react';

const Ex8 = () => {
  const [count, setCount] = useState(0);

  // useCallback 이용해서, 콜백함수 부분에, setCount 이용하기.
  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={handleReset}>초기화</button>
    </div>
  );
};

export default Ex8;
