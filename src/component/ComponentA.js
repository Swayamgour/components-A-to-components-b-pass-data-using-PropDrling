import React from 'react';
import ComponentB from '../component/ComponentB';

function ComponentA() {
  const cendol = 2;

  return (
    <div>
      <ComponentB initialValue={cendol} />
    </div>
  );
}

export default ComponentA;
