import React from "react";
import classes from "./Feed.module.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useEffect } from "react";
import { useState } from "react";
import db from "../../firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const avatar = useSelector((state) => state.userInfo.profileImage);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className={classes.feed}>
      {/* Header */}
      <div className={classes["feed_header"]}>
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />

      {/* Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            avatar={
              post.avatar === avatar
                ? post.avatar
                : post.avatar.search("blob")
                ? post.avatar
                : posts.avatar
                ? posts.avatar
                : "https://us.123rf.com/450wm/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg?ver=6"
            }
            image={post.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};
export default Feed;
