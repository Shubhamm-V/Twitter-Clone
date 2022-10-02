import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import DemoLogin from "./components/DemoLogin/DemoLogin";
import { useSelector } from "react-redux";
const App = () => {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn.isLoggedIn)
  let content;
  if(isLoggedIn){
    content = (
      <div className="app">
      {/* Sidebar */}
      <Sidebar/>
 
      {/* Feed */}
      <Feed/>
 
      {/* Widget */}
      <Widgets/>
     </div>
    )
  }
  else{
    content = <DemoLogin/> 
  }
  return (
    <div>
      {content}

    </div>
  )
};

export default App;
