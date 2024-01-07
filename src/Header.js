import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props){
    return(
        <>
        <h1>{props.title}</h1>
         {props.children}
        </>
    )
}

Header.prototype = {
    title: PropTypes.string.isRequired,
    cildren: PropTypes.node,
}


/*Pegando a props (propiedade do title do header e renderizando no h1)*/
/*Existe uma forma de desestruturação da prop que é usando {title} e renderizando no h1*/