import { Button } from "@mui/material";
import { useState } from "react";
import classes from "./DemoLogin.module.css";
import Twitter from "@mui/icons-material/Twitter";
import { useDispatch } from "react-redux";
import { loginActions, userActions } from "../store/store";
const DemoLogin = () => {
  const [inputUserName, setUserName] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const userNameHandler = (event) => {
    setUserName(event.target.value);
    setIsValidInput(true);
  };
  const demoLoginHandler = (event) => {
    event.preventDefault();
    if (inputUserName.trim() === "") {
      setIsValidInput(false);
      return;
    }
    dispatch(
      userActions.addUser({
        displayName: inputUserName,
        userName: inputUserName.trim(),
        image: selectedImage
          ? URL.createObjectURL(selectedImage)
          : "https://us.123rf.com/450wm/gmast3r/gmast3r1411/gmast3r141100350/33865095-businessman-profile-icon-male-portrait-flat.jpg?ver=6",
      })
    );
    dispatch(loginActions.loginAccount());
  };
  return (
    <div className={classes.login}>
      <h2>Demo Login</h2>
      <Twitter className={classes.twitterIcon} />
      <form className={classes.form}>
        <label className={classes.inputName}>Demo Username</label>
        <input
          type="text"
          className={classes.userNameInput}
          onChange={userNameHandler}
        ></input>
        {!isValidInput && (
          <label className={classes.invalidInput}>
            Username should not empty
          </label>
        )}
        <label className={classes.imageInputName}>
          Profile Image (Optional){" "}
        </label>
        <input
          type="file"
          name="myImage"
          className={classes.image}
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
        />
        {selectedImage && (
          <div>
            <img
              alt="not fount"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <Button onClick={demoLoginHandler} className={classes.loginButton}>
          DEMO LOGIN
        </Button>
      </form>
    </div>
  );
};

export default DemoLogin;
