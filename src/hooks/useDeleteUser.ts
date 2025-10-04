import HttpClient from "../utils/HttpClient.ts";

const useDeleteUser = () => {
    const httpClient = new HttpClient();

    const deleteUser = async (id: number) => {
        try {
            await httpClient.delete(`users/delete/${id}`);
        } catch (error) {
            console.error('Error al eliminar usuario', error);
        }
    }

    return { deleteUser };
}

export default useDeleteUser;