import { JpAxios } from "../axios/JpAxios"

export const getPostsService = async (setPosts , setMainPosts)=>{
    await JpAxios.get('/posts').then(res=>{
        setPosts(res.data);
        setMainPosts(res.data);
    })
}
export const deletePostService = async (postId , posts , setPosts , Alert)=>{
    await JpAxios.delete(`/posts/${postId}`).then(res=>{
        if(res.status === 200){
            const newPosts = posts.filter(item => item.id !== postId);
            setPosts(newPosts);
            Alert("موفق","پست مورد نظر با موفقیت حذف شد!","success",2);
        }else{
            Alert("خطا","حذف پست با خطا مواجه شد!","error",2);
        }
    })
}