import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

import {
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
        <p>{text}</p>
        <p>Posted on {formatDate(date)}</p>
        {showActions && (
          <>
            {" "}
            <button className='btn btn-light' onClick={(e) => addLike(_id)}>
              <LikeOutlined />{" "}
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button className='btn btn-light' onClick={(e) => removeLike(_id)}>
              <DislikeOutlined /> <span> </span>
            </button>
            <Link to={`/posts/${_id}`} className='btn btn-primary'>
              Discussion
              {comments.length > 0 && <span>{comments.length}</span>}
            </Link>
            {!auth.loading && user === auth.user._id && (
              <button
                className='btn btn-danger'
                onClick={(e) => deletePost(_id)}
              >
                <DeleteOutlined />
              </button>
            )}{" "}
          </>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
