import { BrowserRouter as Router, Route } from "react-router-dom";
import JoinPage from "./JoinPage/JoinPage";
import ChatPage from "./ChatPage/ChatPage";

function PageRoute() {
  return (
    <Router>
      <Route path="/" exact component={JoinPage} />
      <Route path="/chat" component={ChatPage} />
    </Router>
  );
}

export default PageRoute;
