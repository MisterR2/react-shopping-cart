import { useState } from "react"

export default function Users() {
    const [users, setUsers] = useState([
        {
            name: 'Fulano',
            age: 10
        },
        {
            name: 'Cicrano',
            age: 20
        },
        {
            name: 'Beltrano',
            age: 30
        },
    ])

    const usersElm = users.map((u, i) =>{ 
        return (
            <li key={i}>
                {u.name} <button onClick={() => remove(i)}>X</button>
            </li>
        )
    }
    )

    const remove = (index: number) => {
        setUsers(u => [
            ...u.slice(0, index),
            ...u.slice(index+1),
        ])
    }

    // const removeLast = () => {
    //     setUsers(u => [...u.slice(0, u.length-1)])
    // }

    return <>
        <p>Usuários:</p>
        <ul>
            {usersElm}
        </ul>
    </>
}