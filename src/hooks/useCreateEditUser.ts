import type { CreateUserPayload, CreateUserResponse, User } from '../types/User.type'
import HttpClient from '../utils/HttpClient'


const httpClient = new HttpClient();

const useCreateEditUser = () => {

    const createUser = async (data: CreateUserPayload) => {
        let response = await httpClient

        try {
            const response = await httpClient.post('users/add', data);
            const userData = await response.json();
            console.log('Usuario creado:', userData);
            return userData as CreateUserResponse;
        } catch (error) {
            console.error('Error al crear un usuario:', error);
            return null;
        }

    };

    return { createUser };
};

export default useCreateEditUser;
