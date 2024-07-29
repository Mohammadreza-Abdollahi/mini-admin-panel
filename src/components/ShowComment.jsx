import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { getCommentsService } from '../services/PostService';
import MyAlert from '../hoc/MyAlert';
import { Link, useParams } from 'react-router-dom';
const ShowComment = (props) => {
    const { Confirm , Alert } = props;
    const [comments , setComments] = useState([]);
    const [mainComments , setMainComments] = useState([]);
    const { postId } = useParams();
    console.log(postId);
    useEffect(()=>{
        getCommentsService(postId,setComments,setMainComments);
    },[postId])
    const handleSearch = (e)=>{
        setComments(mainComments.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    // const handleDelete = async (postId)=>{
    //     if(await Confirm("حذف پست!","ایا از حذف این پست اطمینان دارید؟","warning","بله ، حذف شود","بازگشت")){
    //         deletePostService(postId , posts , setPosts , Alert);
    //     }
    // }
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>کامنت از X</h2>
                <section>

                </section>
            </section>
        </>
     );
}
 
export default MyAlert(ShowComment);