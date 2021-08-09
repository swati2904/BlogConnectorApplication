import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import { connect } from "react-redux";
import {
  LikeOutlined,
  DislikeOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
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
        <button className='btn btn-light'>
          <LikeOutlined /> {likes.length > 0 && <span>{likes.length}</span>}
        </button>
        <button className='btn btn-light'>
          <DislikeOutlined /> <span> </span>
        </button>

        <Link to={`/posts/${_id}`} className='btn btn-primary'>
          Discussion
          {comments.length > 0 && <span>{comments.length}</span>}
        </Link>

        {!auth.loading && user === auth.user._id && (
          <button type='button' className='btn btn-danger'>
            <DeleteOutlined />
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
