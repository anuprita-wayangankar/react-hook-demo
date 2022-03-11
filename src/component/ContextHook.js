import React, { useContext } from 'react'
import { UserContext } from '../App'

function ContextHook() {
    const user = useContext(UserContext)
    return (
        <div>
            {user.firstName + ' ' + user.lastName}
        </div>
    )
}

export default ContextHook
