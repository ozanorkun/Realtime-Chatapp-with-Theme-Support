import { ChatProvider } from "./contexts/ChatContext";
import Container from "./components/Container";

function App() {
  return (
    <ChatProvider>
      <Container></Container>
    </ChatProvider>
  );
}

export default App;
