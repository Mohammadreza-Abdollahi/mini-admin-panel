import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { deletePostService, getPostsService } from '../services/PostService';
import MyAlert from '../hoc/MyAlert';
import { Link } from 'react-router-dom';
const Posts = (props) => {
    const { Confirm , Alert } = props;
    const [posts , setPosts] = useState([]);
    const [mainPosts , setMainPosts] = useState([]);
    useEffect(()=>{
        getPostsService(setPosts,setMainPosts);
    },[])
    console.log(posts);
    const handleSearch = (e)=>{
        setPosts(mainPosts.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    const handleDelete = async (postId)=>{
        if(await Confirm("حذف پست!","ایا از حذف این پست اطمینان دارید؟","warning","بله ، حذف شود","بازگشت")){
            deletePostService(postId , posts , setPosts , Alert);
        }
    }
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت پست ها</h2>
                <section>
                    <div className={`${style.search_sec}`}>
                        <div>
                            <input className={`${style.search_inp}`} type="text" placeholder='جستجو...' onChange={(e)=>handleSearch(e)}/>
                        </div>
                        <div>
                            <button className={`${style.add_btn}`}><Link to={'/posts/add'}>افزودن</Link></button>
                        </div>
                    </div>
                    <div>
                        {
                            posts.length !== 0 ? (
                                <table className={`${style.user_table}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th colSpan={2}>شناسه کاربر</th>
                                    <th>موضوع</th>
                                    <th colSpan={3}>عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map(item=>{
                                        return(
                                            <tr key={item.id}>
                                                <td colSpan={2}>{item.id}</td>
                                                <td>{item.userId}</td>
                                                <td>{item.title}</td>
                                                {/* <td>{item.body}</td> */}
                                                <td colSpan={2}><button onClick={()=>handleDelete(item.id)} className={`${style.trash}`} title='حذف'><i class="fa-solid fa-trash"></i></button><Link to={`/posts/add/${item.id}`}><button className={`${style.rename}`} title='ویرایش'><i class="fa-solid fa-pen-to-square"></i></button></Link><Link to={`/posts/${item.id}/comments`}><button className={`${style.coments}`} title='کامنت ها'><i class="fa-solid fa-comments"></i></button></Link><Link to={`/posts/view/${item.id}`}><button className={`${style.view}`} title='مشاهده' ><i class="fa-solid fa-eye"></i></button></Link></td>
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
 
export default MyAlert(Posts);