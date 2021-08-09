import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  return (
    <div className='card border-0 my-1'>
      <div className='col-12 px-3 py-1'>
        <div className='card px-4 bg-light py-2 my-2 '>
          <h5> Post a Comment</h5>

          <form
            className=' my-1'
            onSubmit={(e) => {
              e.preventDefault();
              addComment(postId, { text });
              setText("");
            }}
          >
            <div className='d-flex align-items-center'>
              <textarea
                className='border border-primary'
                name='text'
                cols='60'
                rows='2'
                placeholder='Comment the post'
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
              />
              <input
                type='submit'
                className='btn btn-success mx-4'
                value='Submit'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
