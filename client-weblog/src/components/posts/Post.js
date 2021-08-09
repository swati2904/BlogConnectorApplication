import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { Spin } from "antd";
import PostItem from "./PostItem";

const Post = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      {loading ? (
        <Spin
          tip='Loading...'
          className='position-absolute top-50 start-50'
        ></Spin>
      ) : (
        <>
          <h1 className='text-success'>Posts</h1>
          <div>
            {posts.map((post) => (
              <PostItem key={post._id} post={post} />
            ))}
          </div>{" "}
        </>
      )}
    </>
  );
};

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPosts })(Post);
