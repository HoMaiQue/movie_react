import { useState, useEffect } from "react"
// API
import API from '../API'
import {isPersistedState} from '../helpers'

export const useHomeFetch = () => {

    const initialState = {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    }
    const [searchTerm, setSearchTerm] = useState('')
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)

            setState(pre => ({
                ...movies,
                results:
                    page > 1 ? [...pre.results, ...movies.results] : [...movies.results]
            }))

        } catch (error) {
            setError(true)
        }

        setLoading(false)
    }
    // initial and  search
    useEffect(() => {
        if(!searchTerm){
            const sessionState = isPersistedState('homeState')

            if(sessionState){ 
                console.log('SessionStorage');
                setState(sessionState)
                return 
            }
        }
        console.log('API');
        setState(initialState)
        fetchMovies(1, searchTerm)
    }, [searchTerm])
    // load more
    useEffect(() => {
        if (!isLoading) return;
        fetchMovies(state.page + 1, searchTerm)
        setIsLoading(false)
    }, [isLoading, searchTerm, state.page])
    // write to sessionStorage
    useEffect(() => {
        if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    },[searchTerm, state])

    return { state, loading, error, setSearchTerm, searchTerm, setIsLoading }
}