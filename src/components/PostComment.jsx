import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { getCommentsService } from '../services/PostService';
import MyAlert from '../hoc/MyAlert';
import { Link, useParams } from 'react-router-dom';
const PostComment = (props) => {
    const { Confirm , Alert } = props;
    const [comments , setComments] = useState([]);
    const [mainComments , setMainComments] = useState([]);
    const { postId } = useParams();
    console.log(postId);
    useEffect(()=>{
        getCommentsService(postId,setComments,setMainComments);
    },[postId])
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>{`کامنت های پست با شناسه ${postId}`}</h2>
                <section>
                    <div className={`${style.search_sec}`}>
                        <div>
                            {/* <button className={`${style.add_btn}`}><Link to={'/posts/add'}>افزودن</Link></button> */}
                        </div>
                    </div>
                    <div>
                        {
                            comments.length !== 0 ? (
                                <table className={`${style.user_table}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ایمیل</th>
                                    <th>شناسه پست</th>
                                    <th>موضوع</th>
                                    <th>متن</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comments.map(item=>{
                                        return(
                                            <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.postId}</td>
                                                <td>{item.name}</td>
                                                <td>{item.body}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                            ):(
                            <div className={`${style.loading_err}`}>
                                <h1>هیچ پستی موجود نیست!!</h1>
                                <h1>لطفا کمی صبر کنید...</h1>
                            </div>
                            )
                        }
                    </div>
                </section>
            </section>
        </>
     );
}
 
export default MyAlert(PostComment);