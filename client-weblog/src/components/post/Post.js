import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Spin } from "antd";
import { getPost } from "../../actions/post";
import CommentForm from "../post/CommentForm";
import CommentItem from "../post/CommentItem";
import { ArrowLeftOutlined } from "@ant-design/icons";
import SinglePost from "./SinglePost";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Spin tip='Loading...' className='position-absolute top-50 start-50'></Spin>
  ) : (
    <div className='post-background'>
      <div className='container'>
        <Link
          to='/posts'
          className='btn btn-secondary d-flex align-item-center '
          style={{ width: "10rem" }}
        >
          <ArrowLeftOutlined className='mx-2' /> Back To Posts
        </Link>
        <h1 className='text-white text-center'>
          {post.name.trim().split(" ")[0]}'s Blog
        </h1>
        <div className='card mt-4 bg-light'>
          <div className='row'>
            <div className='col-12'>
              <SinglePost post={post} showActions={false} />
              <CommentForm postId={post._id} />
              <div>
                {post.comments.map((comment) => (
                  <CommentItem
                    key={comment._id}
                    comment={comment}
                    postId={post._id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
