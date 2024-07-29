import { JpAxios } from "../axios/JpAxios"

export const getPostsService = async (setPosts , setMainPosts)=>{
    await JpAxios.get('/posts').then(res=>{
        setPosts(res.data);
        setMainPosts(res.data);
    })
}
export const getPostsByIdService = async (postId , setPostData)=>{
    await JpAxios.get(`/posts/${postId}`).then(res=>{
        setPostData(res.data)
    })
}
export const addPostService = async (PostData , Alert)=>{
 await JpAxios.post(`/posts` , PostData).then(res=>{
    if(res.status === 201){
        Alert("موفق","پست مورد نظر با موفقیت اضافه شد","success",2);
    }else{
        Alert("خطا","عملیات با خطا مواجه شد","success",2);
    }
 })
}
export const updatePostService = async (postId , PostData , Alert)=>{
    await JpAxios.put(`/posts/${postId}` , PostData).then(res=>{
        if(res.status === 200){
            Alert("موفق","پست مورد نظر با موفقیت ویرایش شد","success",2)
        }else{
            Alert("خطا","عملیات با خطا مواجه شد","success",2);
        }
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
// Comments
export const getCommentsService = async (postId , setComments , setMainComments)=>{
    await JpAxios.get(`/posts/${postId}/comments`).then(res=>{
        console.log(res.data);
        setComments(res.data);
        setMainComments(res.data);
    })
}