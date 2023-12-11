const API_BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export type Post = {
    userId?: number,
    id?: number,
    title?: string,
    body?: string
}

export async function getAllPosts(){
    try {
        const response = await fetch(API_BASE_URL);
        return (await response.json()) as Post[];
    }catch (e){
        throw e;
    }
}