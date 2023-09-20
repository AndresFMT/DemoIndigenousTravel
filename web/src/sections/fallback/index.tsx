import React from 'react';

type Props = {
  __type: string;
};

const Fallback = ({_type}:Props) => {
  console.log('type not found' , _type);
  return (
    <div>
      <h1>{'404'}</h1>
      <p>{`Section type ${_type} not found`}</p>
    </div>
  );
};

export default Fallback;
