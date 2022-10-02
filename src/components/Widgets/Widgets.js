import { Search } from "@mui/icons-material";
import classes from "./Widgets.module.css";
import {
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className={classes.widgets}>
      <div className={classes["widgets__input"]}>
        <Search className={classes["widget__searchIcon"]} />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className={classes["widgets__widgetContainer"]}>
        <h3>What's happening</h3>
        <TwitterTweetEmbed tweetId={"1520072430307487747"} />       
        <TwitterTweetEmbed tweetId={"1560644684237586434"} />
        <TwitterTweetEmbed tweetId={"1570576564936646657"} />
      </div>
    </div>
  );
};

export default Widgets;
