import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Details: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
  
    const fetchData  = async()=>{
        try {
            const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(data);

    return (
        <div>
            {/* Render your data here */}
            nie
        </div>
    );
};

export default Details;
