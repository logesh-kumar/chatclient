import { Link, Route, Routes } from "react-router-dom";
import { ChatWidget } from "./page/chat-widget/CHatWidget";
import { Post } from "./page/post/Post";
import { Todo } from "./page/todo/Todo";

function App() {
  return (
    <div className="App">
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Posts</Link>
        <Link to="/tdos">Todos</Link>
        <Link to="/chat-widget">Chat widget</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/chat-widget" element={<ChatWidget />} />
      </Routes>
    </div>
  );
}

export default App;
