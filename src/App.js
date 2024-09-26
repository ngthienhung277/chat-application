import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

import "./App.css";

const projectID = "6f05897f-5740-4a27-9612-5825437aa57d";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => (
        <ChatFeed
          {...chatAppProps}
        />
      )}
    />
  );
};

export default App;
