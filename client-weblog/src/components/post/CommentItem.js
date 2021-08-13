import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../utils/formatDate";
import { deleteComment } from "../../actions/post";
import { Avatar } from "antd";
import { UserOutlined, DeleteOutlined } from "@ant-design/icons";

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <div className='card border-0 my-1'>
    <div className='row px-3 py-1'>
      <div className='col-4 d-flex flex-column align-items-center '>
        <Link to={`/profile/${user}`} className='text-decoration-none'>
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
            shape='square'
            icon={<UserOutlined />}
          />
          <h4 className='text-dark'>{name}</h4>
          <p>{formatDate(date)}</p>
        </Link>
      </div>
      <div className='col-8'>
        <p>{text}</p>

        {!auth.loading && user === auth.user._id && (
          <button
            onClick={() => deleteComment(postId, _id)}
            type='button'
            className='btn btn-danger'
          >
            <DeleteOutlined />
          </button>
        )}
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
