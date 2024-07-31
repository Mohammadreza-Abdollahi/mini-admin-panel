import { useNavigate, useParams } from 'react-router-dom';
import style from '../assets/css/style.module.css'
import { useEffect, useReducer } from 'react';
import MyAlert from '../hoc/MyAlert';
import { addPostService, updatePostService } from '../services/PostService';
import { JpAxios } from '../axios/JpAxios';
import { dataReducer, init } from '../reducer/PostReducer';

const AddPost = (props) => {
    const { Alert } = props;
    const navigate = useNavigate();
    const {postId} = useParams();
    const [data , dispatch] = useReducer(dataReducer , init)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(postId){
            updatePostService(postId , data.postData , Alert)
        }else{
            addPostService(data.postData , Alert);
        }
    }
    const setInputValue = (e , propName)=>{
        dispatch({
            type: "setInputValue",
            propName: propName,
            propValue : e.target.value
        })
    }
    useEffect(()=>{
        JpAxios.get('/users').then(res=>{
            dispatch({
                type: 'changeUsers',
                payload: res.data
            })
        })
        if(postId){
            JpAxios.get(`/posts/${postId}`).then(res=>{
                dispatch({
                    type: 'setUpdate',
                    payload: res.data
                })
            })
        }
    },[postId])
    return ( 
        <>
            <section className={`${style.add_user_cont}`}>
                <h2 className={`${style.heading_title}`}>{postId ? "ویرایش پست" : "افزودن پست"}</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="userId">شناسه کاربر</label>
                        <select onChange={(e)=>setInputValue(e , 'userId')} name="userId" id="userId" value={data.postData.userId}>
                            <option value="0">انتخاب نشده</option>
                            {
                                data.users.map(item=>{
                                    return(
                                        <option value={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="userId2">شناسه کاربر</label>
                        <input onChange={(e)=>setInputValue(e , 'userId')} type="text" name="userId2" id="userId2" placeholder='نام و نام خانوادگی' value={data.postData.userId}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="title">موضوع</label>
                        <input onChange={(e)=>setInputValue(e , 'title')} type="text" name="title" id="title" placeholder='نام و نام خانوادگی' value={data.postData.title}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="body">متن</label>
                        <textarea onChange={(e)=>setInputValue(e , 'body')} rows={5} name="body" id="body" placeholder='متن' value={data.postData.body}></textarea>
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