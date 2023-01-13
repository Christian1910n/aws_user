import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
    
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        loadUsers();
    },[])

    const loadUsers=async()=>{       const result = await axios.get("http://localhost:8080/api/assets/get-string");
        console.log(result.data);
        setUsers(result.data);
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Usuario</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                                <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{user.titulo}</td>
                                <td>{user.imagenPath}</td>
                                <td>{user.imagenUrl}</td>
                            </tr>
                            ))
                        }  
                    </tbody>
                </table>
            </div>
        </div>
    )
}
