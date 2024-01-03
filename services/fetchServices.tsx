import axios, { AxiosResponse } from "axios";
import { apiFetch } from "@/types/apiType";

export const Get = (): Promise<apiFetch> => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.NEXT_PUBLIC_API}`)
            .then((response: AxiosResponse<apiFetch>) => resolve(response.data))
            .catch(error => console.log(error.response.data));
    });
};