import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";
import ReadMoreReact from "read-more-react";
import blogImage from "../../assets/allblog.jpg";
import { Avatar } from "antd";
import {
  UserOutlined,
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
    <div className='card my-3'>
      <div className='row bg-light'>
        <div className='col-9'>
          {" "}
          <div className='row align-items-center'>
            <div className='col-3 py-2'>
              <Link to={`/profile/${user}`} className='text-decoration-none'>
                <h6 className='text-capitalize text-center text-success'>
                  {name}
                </h6>
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
                  className='mx-auto d-block'
                  icon={<UserOutlined />}
                />

                <button
                  type='button'
                  className='btn btn-outline-warning btn-sm  mx-auto d-flex'
                >
                  View Profile
                </button>
              </Link>
            </div>
            <div className='col-9'>
              <Link to={`/posts/${_id}`} className='btn '>
                <ReadMoreReact
                  text={text}
                  max={200}
                  readMoreText='...read more'
                />
              </Link>

              <p className='fw-lighter fst-italic text-black-50 float-end'>
                - Posted on {formatDate(date)}
              </p>
              {showActions && (
                <div>
                  {" "}
                  <button
                    className='btn mx-1 my-1'
                    onClick={(e) => addLike(_id)}
                  >
                    <LikeOutlined style={{ color: "#00a300" }} />{" "}
                    <span style={{ color: "#00a300" }}>
                      {likes.length > 0 && <span>{likes.length}</span>}
                    </span>
                  </button>
                  <button
                    className='btn mx-1 my-1'
                    onClick={(e) => removeLike(_id)}
                  >
                    <DislikeOutlined style={{ color: "#ff0000" }} />{" "}
                    <span> </span>
                  </button>
                  <Link
                    to={`/posts/${_id}`}
                    className='btn btn-outline-info mx-1 my-1'
                  >
                    Discussion
                    {comments.length > 0 && (
                      <span className='mx-1'>{comments.length}</span>
                    )}
                  </Link>
                  {!auth.loading && user === auth.user._id && (
                    <button
                      className='btn btn-outline-danger mx-1 my-1'
                      onClick={(e) => deletePost(_id)}
                    >
                      <DeleteOutlined />
                    </button>
                  )}{" "}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='col-3'>
          <img
            src={blogImage}
            alt='user post'
            className='img-fluid rounded-start h-100'
          />
        </div>
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
