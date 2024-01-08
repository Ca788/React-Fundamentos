import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

/* Pegando a props (propiedades) do title post e renderizando no strong e small*/
export default function Post(props) {
  return (
    <>
      <article>
        <PostHeader
          onRemove={props.onRemove}
          post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
          }}
        />
        <br />
        <small>{props.post.subtitle}</small>
        <br />
        Média: {props.post.likes / 2}
      </article>
      <br />
    </>
  );
}

// Adicionando um novo valor para o meu objeto PROPTYPES tipando minhas props.
// Para tipar objetos usa o shape()
Post.prototype = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
