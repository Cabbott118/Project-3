import React from 'react';

// Reactstrap
import { Spinner } from 'reactstrap';

export default function LoadingSpinner(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.top,
        left: props.left,
      }}
    >
      <Spinner style={{ width: '3rem', height: '3rem' }} color='dark' />
    </div>
  );
}
