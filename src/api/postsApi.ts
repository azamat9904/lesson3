import axios from 'axios';
import {IPost} from "../types/interfaces";
export const postsApi = {
    getPosts:()=>{
        return axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts').then(res=>res.data);
    },
    getPost:(id:number)=>{
        return axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res=>res.data);
    }
};
