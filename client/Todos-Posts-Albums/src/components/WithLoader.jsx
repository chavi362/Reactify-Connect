import React from 'react';
import { Spinner } from 'react-bootstrap';

const WithLoader = (Component) => {
  return (props) => {
    return (
      <div>
        {props.loading ? <Spinner /> : <Component {...props} />}
      </div>
    );
  };
};

export default WithLoader;
