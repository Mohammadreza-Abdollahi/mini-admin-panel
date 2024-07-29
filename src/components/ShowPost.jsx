import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { getPostsByIdService } from '../services/PostService';
import MyAlert from '../hoc/MyAlert';
import { useParams } from 'react-router-dom';
const ShowComment = (props) => {
    const [postData , setPostData] = useState([]);
    const { postId } = useParams();
    useEffect(()=>{
        getPostsByIdService(postId , setPostData);
    },[postId]);
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>{`پست با شناسه ${postId}`}</h2>
                    <table className={`${style.show_table}`}>
                        <tr>
                            <td className={`${style.show_table_title}`}>شناسه کاربر :</td>
                            <td className={`${style.show_table_inf}`}>{postData.userId}</td>
                        </tr>
                        <tr>
                            <td className={`${style.show_table_title}`}>شناسه پست :</td>
                            <td className={`${style.show_table_inf}`}>{postData.id}</td>
                        </tr>
                        <tr>
                            <td className={`${style.show_table_title}`}>موضوع :</td>
                            <td className={`${style.show_table_body}`}>{postData.title}</td>
                        </tr>
                        <tr>
                            <td className={`${style.show_table_title}`}>متن :</td>
                            <td className={`${style.show_table_body}`}>{postData.body  }</td>
                        </tr>
                    </table>
            </section>
        </>
     );
}
 
export default MyAlert(ShowComment);