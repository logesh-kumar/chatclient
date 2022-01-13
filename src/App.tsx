import { Route, Routes } from "react-router-dom";
import { Post } from "./page/post/Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
