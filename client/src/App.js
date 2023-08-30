import Header from "./components/Header";
import {Route,Routes} from 'react-router-dom'
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";


function App() {
  return (
    <div>
    
    <Header />
    <Routes >
      <Route path="/" element={<Blogs />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/my-blogs" element={<UserBlogs />}></Route>
      <Route path="/blog-details/:id" element={<BlogDetails />}></Route>
      <Route path="/create-blog" element={<CreateBlog />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
