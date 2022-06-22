import React from 'react'
import { Wrapper } from './Button.style'
export default function Button({text, callback}) {
    return (
        <Wrapper type="button" onClick={callback}>
            {text}
        </Wrapper>
    )
}
