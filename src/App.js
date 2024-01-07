import React, { useState } from "react";

/* IMPORTS FILERS */
import Post from "./Post"
import Header from "./Header";


function App(){
const [posts, setPosts] = useState([
{id: Math.random(), title: "Titulo01", subtitle: "Subtitulo01", likes: 20},
{id: Math.random(), title: "Titulo02", subtitle: "Subtitulo02", likes: 40},
{id: Math.random(), title: "Titulo03", subtitle: "Subtitulo03", likes: 60},
])
 
  function handleRefresh(){
    setPosts((prevPost) => [
      ...prevPost, 
      {
        id: Math.random(),
        title: `Title#0${prevPost.length + 1}`,
        subtitle: `Sub#0${prevPost.length + 1}`,
        likes: 50,
      } ])
  }

  function handleClear(postId){
     setPosts((prevPost) => (
      prevPost.filter(post => post.id !== postId)
     ))
  }

  return (
    <> 
  <Header title="Duca Blog"> 
   <h2>Posts da semana
       <button onClick={handleRefresh}>Atualizar</button>
   </h2>
  </Header> 

    <hr />

{posts.map(post => (
  <Post
  key={post.title}
  likes ={post.likes}
  onRemove={handleClear}
  post={{
    id: post.id,
   title: post.title,
   subtitle: post.subtitle,
  }}
 />
))}
   
 </>

  )
}

export default App