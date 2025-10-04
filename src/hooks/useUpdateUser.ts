import HttpClient from '../utils/HttpClient.ts'

const httpClient = new HttpClient();

import type { CreateUserPayload, CreateUserResponse } from '../types/User.type';

const useUpdateUser = () => {
    const updateUser = async (data: CreateUserPayload) => {
        try {
            const response = await httpClient.put('users/update', data);
            const text = await response.text();
            if (text.trim() === '') {
                return { success: true };
            }
            let userData;
            try {
                userData = JSON.parse(text);
            } catch (err) {
                console.error('Respuesta no es JSON:', text);
                return null;
            }
            console.log('Usuario actualizado:', userData);
            return userData as CreateUserResponse;
        } catch (error) {
            console.error('Error al actualizar usuario:', error);
            return null;
        }
    };
    return { updateUser };
};

export default useUpdateUser;