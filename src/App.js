import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2023 4:34:36 PM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2023 4:34:36 PM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2023 4:34:36 PM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 01, 2023 4:34:36 PM",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ]);

  const [search, setSearch] = useState("");

  const [searchResults, setSearchResults] = useState([]);
  const history = useNavigate();

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    history.push("/");
  };

  return (
    <div className="App">
      <Header title="React JS Blog"></Header>
      <Nav search={search} setSearch={setSearch}></Nav>
      <Routes>
        <Route exact path="/" element={<Home posts={posts}></Home>}></Route>
        <Route exact path="/post" element={<NewPost></NewPost>}></Route>
        <Route
          path="/post/:id"
          element={
            <PostPage posts={posts} handleDelete={handleDelete}></PostPage>
          }></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Missing></Missing>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
