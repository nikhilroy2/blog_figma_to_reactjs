import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import SinglePost from './Pages/SinglePost/SinglePost';
import BlogUpload from './Pages/BlogUpload/BlogUpload';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Homepage></Homepage>}></Route>
        </Routes>
       <Routes>
          <Route path="/single_post" element={<SinglePost></SinglePost>}></Route>
        </Routes>

        <Routes>
          <Route path="/blog_upload" element={<BlogUpload></BlogUpload>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
