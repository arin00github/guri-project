import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const apiInstance = axios.create({
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const executeRequest = async (path: string, config?: AxiosRequestConfig): Promise<AxiosResponse | null> => {
    try {
        return await apiInstance(path, { ...config });
    } catch (err) {
        const anyResult = err as AxiosError;
        if (anyResult && anyResult.response) {
            return anyResult.response;
        }
    }
    return null;
};
