import classes from "./TweetBox.module.css";
import { Avatar, Button } from "@mui/material";
import { useState } from "react";
import db from "../../firebase";
import { useSelector } from "react-redux";
const TweetBox = () => {
  const userData = useSelector((state)=>state.userInfo);
  console.log(userData.profileImage)
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');
  const tweetMessageHandler = (event) => {
    setTweetMessage(event.target.value);
  };  
  const tweetImageHandler = (event) => {
    setTweetImage(event.target.value);
  };
  const sendTweet = (event) => {
    event.preventDefault();
    if(tweetMessage.trim()===''){
      return;
    }
    db.collection('posts').add({
      displayName: userData.displayName,
      userName: userData.userName,
      avatar: userData.profileImage,
      verified: false,
      text: tweetMessage,
      image: tweetImage
    })
    setTweetMessage('');
    setTweetImage('');
  }
  return (
    <div className={classes.tweetBox}>
      <form>
        <div className={classes["tweetBox__input"]}>
          <Avatar
            src={userData.profileImage}
            alt="Twitter Avatar"
          />
          <input
            onChange={tweetMessageHandler}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
           onChange={tweetImageHandler}
           value={tweetImage}
          className={classes["tweetBox__inputImage"]}
          placeholder="Optional : Enter image URL"
          type="text"
        />
        <Button onClick = {sendTweet} className={`${classes["tweetBox__tweetButton"]} ${tweetMessage==='' && classes['tweetBox__invalid']}`}>Tweet</Button>
      </form>
    </div>
  );
};
export default TweetBox;
