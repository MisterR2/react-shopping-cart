import { useState } from "react"

export default function User() {
    const [user, setUser] = useState({
        name: 'Fulano',
        age: 10
    })
    
    const changeName = () => {
        setUser( u => ({ ...u, name:'Cicrano' }) )
    }

    return(
    <> 
        <p>Usuário: { user.name } / { user.age } anos</p>
        <button onClick={ changeName }>Muda nome</button>
    </>
    )
}