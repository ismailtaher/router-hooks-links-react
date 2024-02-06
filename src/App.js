import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/post" element={<NewPost></NewPost>}></Route>
        <Route path="/post/:id" element={<PostPage></PostPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<Missing></Missing>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
