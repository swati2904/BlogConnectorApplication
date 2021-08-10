import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/post";
import { Spin, Carousel } from "antd";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import blogImage from "../../assets/blog.jpg";
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
        <div>
          <img src={createBlog} className='w-100' style={{ height: "300px" }} />
          <div className=' alert-warning'>
            <div className='container'>
              <h1 className='text-success'>Posts</h1>
              <PostForm />
              <div>
                {posts.map((post) => (
                  <PostItem key={post._id} post={post} />
                ))}
              </div>{" "}
            </div>
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
