import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {fetchPosts} from "../api/api";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columns: GridColDef[] = [
    {field:'userId', headerName: 'User ID', width:250},
    { field: 'id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
];

const GridPage: React.FC = () => {
    const [data, setData] = useState<Post[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posts = await fetchPosts();
                setData(posts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
        <Box sx={{ height: '100vh', width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
            />
        </Box>
        </div>
    );
};

export default GridPage;
