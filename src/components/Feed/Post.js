import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
} from "@mui/icons-material";
import { forwardRef } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Avatar } from "@mui/material";
import classes from "./Post.module.css";
const Post = forwardRef((props, ref) => {
  return (
    <div className={classes.post} ref={ref}>
      <div className={classes["post__avatar"]}>
        <Avatar src={props.avatar} alt="Profile Photo" />
      </div>
      <div className={classes["post__body"]}>
        <div className={classes["post__header"]}>
          <div className={classes["header__headerText"]}>
            <h3>
              {props.displayName}
              <span className={classes["post_headerSpecial"]}>
                {props.verified && (
                  <VerifiedIcon className={classes["post__badge"]} />
                )}{" "}
                @{props.userName}
              </span>
            </h3>
          </div>
          <div className={classes["post__description"]}>
            <p>{props.text}</p>
          </div>
        </div>
      {props.image &&  <img src={props.image} alt="Post"/> }
        <div className={classes["post__footer"]}>
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
});

export default Post;
