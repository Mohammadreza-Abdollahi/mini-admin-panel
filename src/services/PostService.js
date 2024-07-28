import { JpAxios } from "../axios/JpAxios"

export const getPostsService = async (setPosts , setMainPosts)=>{
    await JpAxios.get('/posts').then(res=>{
        setPosts(res.data);
        setMainPosts(res.data);
    })
}