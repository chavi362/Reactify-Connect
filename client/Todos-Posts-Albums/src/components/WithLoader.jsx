import React from 'react';
import { Spinner } from 'react-bootstrap';

const WithLoader = (Component) => {
  return (props) => {
    return (
      <div>
        {props.loading ?  <Spinner className="position-absolute top-50 start-50 translate-middle">loading</Spinner> : <Component {...props} />}
      </div>
    );
  };
};
export default WithLoader;
