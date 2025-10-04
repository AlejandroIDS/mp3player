import { useEffect, useState } from "react";
import type { User } from "../types/User.type.ts";
import type { UserResponse } from "../types/User.type.ts";
import HttpClient from "../utils/HttpClient.ts";
const httpClient = new HttpClient();


const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const getUsers = () => {
        httpClient.get('users/all').then(response => {
            response.json().then((data: UserResponse) => {
                console.log('Usuarios', data)
                setUsers(data.users)// dice error pero data.users es lo correcto
            }).catch(error => {
                setUsers([]);
                console.error('Error al obtener usuarios', error);
            })
        }).catch(error => {
            setUsers([]);
            console.error('Error en la peticion users/all', error);
        });
    }

    const addUserToList = (user: User) => {
        setUsers((prev) => [...prev, user]);
    }

    useEffect(() => {
        getUsers();
    }, []);


    return {
        addUserToList,
        users,
        getUsers,
    };
};

export default useGetUsers;