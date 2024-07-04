import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
