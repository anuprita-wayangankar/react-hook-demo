import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
export default function ReducerHook() {

    // const [posts, setPosts] = useState([])
    // const [error, setError] = useState('')

    const initialState = {
        loader: true,
        posts: [],
        error: '',
        count: 0
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'FETCH_SUCCESS':
                return {
                    ...state,
                    loader: false,
                    posts: action.payload,
                    error: ''
                }
            case 'FETCH_FAIL':
                return {
                    ...state,
                    loader: false,
                    posts: [],
                    error: 'Somethign went wrong!'
                }
            case 'TITLE_COUNT':
                return {
                    ...state,
                    count: state.count + 1
                }
            default:
                return {
                    state
                }
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        document.title = `You clicked ${state.count} times`

        return () => {
        }
    }, [state.count])

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({ payload: response.data, type: 'FETCH_SUCCESS' })
            })
            .catch(error => {
                dispatch({ payload: [], type: 'FETCH_FAIL' })
            })

        return () => {
        }
    }, [])

    return (<div>
        <button onClick={() => dispatch({ type: 'TITLE_COUNT' })}>Title Count</button>
        {state.loader ? 'Loading' : null}
        <div><ul>
            {state.posts.length !== 0 ? state.posts.map(post => {
                return (<li style={{display:"list-item"}} key={post.id}>{post.title}</li>)
            }) : state.error}
        </ul>
        </div>
    </div>
    )
}
