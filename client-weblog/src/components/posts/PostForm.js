import React from "react";
import { Link } from "react-router-dom";
import { BlockOutlined } from "@ant-design/icons";

const PostForm = () => {
  return (
    <div className='d-flex align-items-center'>
      <p className='fs-4 text-capitalize fw-bolder text-white py-4 px-5 mx-3'>
        Write your blog with some creative Ideas ...{" "}
      </p>
      <Link
        to='/create-post'
        className='btn alert-success d-flex align-items-center  justify-content-center '
      >
        <BlockOutlined className='mx-2' />
        Create Your Blog
      </Link>
    </div>
  );
};

export default PostForm;
