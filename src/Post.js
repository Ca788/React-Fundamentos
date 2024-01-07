import React from "react"
import PropTypes from "prop-types"

/* Pegando a props (propiedades) do title post e renderizando no strong e small*/
export default function Post(props){
   return (
    <>
    <article>
    <strong>{props.post.title}</strong>
     <button onClick={() => props.onRemove(props.post.id)}>
      Remover</button>
    <br/>
    <small>{props.post.subtitle}</small>
    <br/>
    Média: {props.likes / 2}
  </article>
  <br/>
  </>
   )
}

// Adicionando um novo valor para o meu objeto PROPTYPES tipando minhas props.
// Para tipar objetos usa o shape()
Post.prototype = {
   likes: PropTypes.number.isRequired,
   onRemove: PropTypes.func.isRequired,
   post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
   }).isRequired,
}

