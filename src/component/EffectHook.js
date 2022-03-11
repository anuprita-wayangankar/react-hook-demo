import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function EffectHook() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('No Result')

    const [x, setX] = useState('')
    const [y, setY] = useState('')

    const logMousePosition = e => {
        console.log('Mouse Move')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data)
                setError('')
            })
            .catch(error => {
                setPosts([])
                setError('Somethign went wrong !')
            })

        window.addEventListener('mousemove', logMousePosition)
        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (<div>
        <div>
            <ul>
                {posts.length !== 0 ? posts.map(post => {
                    return (<li style={{display:"list-item"}} key={post.id}>{post.title}</li>)
                }) : error}
            </ul>
        </div>
        <div>
            X : {x} , Y : {y}
        </div>
    </div>
    )
}
