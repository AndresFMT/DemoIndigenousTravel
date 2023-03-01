import React from 'react';

type Props = {
  __type: string;
};

const Fallback = ({__type}:Props) => {
console.log('type not found' , __type);
  return (
    <div>
      <h1>{'404'}</h1>
      <p>{`Section type ${__type} not found`}</p>
    </div>
  );
};

export default Fallback;
