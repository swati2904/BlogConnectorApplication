import React from "react";
import { ExclamationOutlined } from "@ant-design/icons";

const NotFound = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
      <h1 className='text-primary text-capitalize d-flex align-items-center '>
        <ExclamationOutlined className='mx-1' /> Page not found
      </h1>
      <p> Sorry, this page does not exist</p>
    </div>
  );
};

export default NotFound;
