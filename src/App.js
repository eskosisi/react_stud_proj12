import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/counter";
import PostItem from "./components/postItem";
import "./components/styles/app.css";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "JS", body: "Description" },
    { id: 3, title: "JS", body: "Description" },
  ]);

  const [title, setTitle] = useState("");

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          type="text"
          placeholder="name"
          onChange={(e) => setTitle(e.target.value)}
        />
        <MyInput ref={bodyInputRef} type="text" placeholder="desc" />
        <MyButton onClick={addNewPost}>Create</MyButton>
      </form>

      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default App;
