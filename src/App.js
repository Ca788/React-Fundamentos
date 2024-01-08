import React, { useState, createContext } from "react";

/* IMPORTS COMPONENTS */
import Post from "./components/Post";
import Header from "./components/Header";
import { ThemeProvider } from "./components/ThemeContext";

export const ThemeContext = createContext();

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Titulo01",
      subtitle: "Subtitulo01",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo02",
      subtitle: "Subtitulo02",
      likes: 40,
      read: true,
    },
    {
      id: Math.random(),
      title: "Titulo03",
      subtitle: "Subtitulo03",
      likes: 60,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevPost) => [
      ...prevPost,
      {
        id: Math.random(),
        title: `Title#0${prevPost.length + 1}`,
        subtitle: `Sub#0${prevPost.length + 1}`,
        likes: 50,
      },
    ]);
  }

  function handleClear(postId) {
    setPosts((prevPost) => prevPost.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="Duca Blog">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>
      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleClear} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
