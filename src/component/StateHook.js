import React, { useState } from 'react'

export default function StateHook() {
    const [items, setItems] = useState([])
    const [Name, setName] = useState({ firstName: '', lastName: '' })

    const addItems = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.random(10 * 3)
            }
        ])
    }
    return (
        <div>
            <div>List of Items {items.map((item => {
                return (
                    <ul key={item.id}><li>{item.id}
                    </li><li>{item.value}</li></ul>
                )
            }))}</div>
            <br />
            <button onClick={addItems}>Click</button>
            <input type="text" value={Name.firstName} onChange={e => setName({ ...Name, firstName: e.target.value })}></input>
            <input type="text" value={Name.lastName} onChange={e => setName({ ...Name, lastName: e.target.value })}></input>
            <div>{JSON.stringify(Name)}</div>
        </div>
    )
}
