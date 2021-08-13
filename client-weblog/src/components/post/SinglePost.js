import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import formatDate from "../../utils/formatDate";
import { addLike, removeLike, deletePost } from "../../actions/post";
import ReadMoreReact from "read-more-react";

import { Avatar } from "antd";
import {
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
  UserOutlined,
} from "@ant-design/icons";

const SinglePost = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  return (
    <div className='card border-0 my-1'>
      <div className='row px-3 py-1'>
        <div className='col-4 d-flex flex-column align-items-center '>
          <Link to={`/profile/${user}`}>
            <Avatar
              src={avatar}
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              icon={<UserOutlined />}
            />
          </Link>

          <p className='text-secondary'> Posted On - {formatDate(date)}</p>
        </div>

        <div className='col-8'>
          <ReadMoreReact text={text} max={300} readMoreText='...read more' />
          {showActions && (
            <>
              {" "}
              <button className='btn btn-light' onClick={(e) => addLike(_id)}>
                <LikeOutlined />{" "}
                <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
              </button>
              <button
                className='btn btn-light'
                onClick={(e) => removeLike(_id)}
              >
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
    </div>
  );
};

SinglePost.defaultProps = {
  showActions: true,
};

SinglePost.propTypes = {
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
  SinglePost
);
