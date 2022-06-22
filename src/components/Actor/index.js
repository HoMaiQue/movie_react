import React from 'react'
// style
import PropTypes from 'prop-types'
import {Wrapper, Image} from './Actor.style'
export default function Actor({name, character, imageUrl}) {
    return (
        <Wrapper>
            <Image src={imageUrl} alt='actor-thumb' />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    )
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    image: PropTypes.string,
}
