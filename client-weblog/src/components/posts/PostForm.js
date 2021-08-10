import React from "react";
import { Link } from "react-router-dom";
import { BlockOutlined } from "@ant-design/icons";

const PostForm = () => {
  return (
    <div>
      <Link
        to='/create-post'
        className='btn btn-success d-flex align-items-center w-25 justify-content-center '
      >
        <BlockOutlined className='mx-2' />
        Create Your Blog
      </Link>
    </div>
  );
};

export default PostForm;
