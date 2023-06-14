import React, { useState } from 'react';

function ComponentB(props) {
  const [value, setValue] = useState(props.initialValue);

  const incrementValue = () => {
    setValue(value + 10);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={incrementValue}>Increment by 10</button>
    </div>
  );
}

export default ComponentB;