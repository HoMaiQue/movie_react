import React, { useState, useEffect, useRef } from 'react'
import searchIcon from '../../images/search-icon.svg'
import { Wrapper, Content } from './SearchBar.style'
export default function SearchBar({setSearchTerm}) {
    const [state, setState] = useState('')
    const initial = useRef(true)
    useEffect(() => {
        if(initial.current) {
            initial.current = false
            return;
        }
        const timer = setTimeout(() =>{
            setSearchTerm(state)
        },500)
        return ()=> {
            clearTimeout(timer)
        }
    },[setSearchTerm, state])

    const getValue = (event) => (
        setState(event.currentTarget.value)
    )
    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={getValue}
                    value={state} />
            </Content>
        </Wrapper>
    )
}
