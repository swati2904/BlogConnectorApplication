import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <div className='container '>
      <Link to='/posts' className='btn alert-primary my-3 '>
        {" "}
        Back to Post
      </Link>
      <p className='fs-4 text-capitalize fw-bolder d-flex align-items-center my-3'>
        <EditOutlined className='mx-2' />
        Start Writing your thoughts...
      </p>
      <p className='fs-6 text-capitalize text-secondary mx-5'>
        - sharing thoughts and ideas with the world.
      </p>
      <form
        className=' d-flex '
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          className='my-5 bg-light'
          name='text'
          cols='80'
          rows='15 '
          placeholder='Create a Blog'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type='submit'
          className='btn btn-success h-25 mx-5 '
          value='Publish'
        />
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(CreatePost);
