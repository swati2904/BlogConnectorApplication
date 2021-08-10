import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { Spin, Carousel } from "antd";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import createBlog from "../../assets/createblog.jpg";

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
        <div className='post-bg-create'>
          <div className='container'>
            <PostForm />
            <div>
              {posts.map((post) => (
                <PostItem key={post._id} post={post} />
              ))}
            </div>{" "}
          </div>
        </div>
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
