import React, { useEffect } from "react";
import Post from "../post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/post/postActions";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.post);
  console.log(posts);
  console.log(loading);

  useEffect(() => {
    if (!posts) {
      dispatch(getPosts());
    }
  }, [dispatch]);

  return loading ? (
    ""
  ) : (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
