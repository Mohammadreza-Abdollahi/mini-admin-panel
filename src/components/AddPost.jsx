import { useNavigate, useParams } from 'react-router-dom';
import style from '../assets/css/style.module.css'
import { useEffect, useState } from 'react';
import { addService, updateService, getByUserIdService } from '../services/UserService';
import MyAlert from '../hoc/MyAlert';
import { addPostService, getPostsByIdService, updatePostService } from '../services/PostService';
const AddPost = (props) => {
    const { Alert } = props;
    const navigate = useNavigate();
    const {postId} = useParams();
    const [postData , setPostData] = useState({
        body: "",
        title: "",
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(postId){
            updatePostService(postId , postData , Alert)
        }else{
            addPostService(postData , Alert);
        }
    }
    useEffect(()=>{
        if(postId){
            getPostsByIdService(postId , setPostData);
        }
    },[postId])
    return ( 
        <>
            <section className={`${style.add_user_cont}`}>
                <h2 className={`${style.heading_title}`}>{postId ? "ویرایش پست" : "افزودن پست"}</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="title">موضوع</label>
                        <input type="text" name="title" id="title" placeholder='نام و نام خانوادگی' value={postData.title} onChange={(e)=>{setPostData({...postData , title: e.target.value})}}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="body">متن</label>
                        <textarea rows={5} name="body" id="body" placeholder='متن' value={postData.body} onChange={(e)=>{setPostData({...postData , body: e.target.value})}}></textarea>
                    </div>
                    <div className={`${style.add_user_form_btns}`}>
                        <button type='submit' className={`${style.btn_1}`}>{postId ? "ویرایش پست" : "ایجاد پست جدید"}</button>
                        <button onClick={()=>navigate("/posts")} className={`${style.btn_2}`}>بازگشت</button>
                    </div>
                </form>
            </section>
        </>
     );
}
 
export default MyAlert(AddPost);