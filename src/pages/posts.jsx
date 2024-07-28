import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { getPostsService } from '../services/PostService';
const Posts = () => {
    const [posts , setPosts] = useState([]);
    const [mainPosts , setMainPosts] = useState([]);
    useEffect(()=>{
        getPostsService(setPosts,setMainPosts);
    },[])
    const handleSearch = (e)=>{
        setPosts(mainPosts.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    console.log(posts);
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
                            <button className={`${style.add_btn}`}>افزودن</button>
                        </div>
                    </div>
                    <div>
                        {
                            posts.length !== 0 ? (
                                <table className={`${style.user_table}`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th colSpan={2}>نام کاربر</th>
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
                                                <td colSpan={2}><button className={`${style.trash}`}><i class="fa-solid fa-trash"></i></button><button className={`${style.rename}`}><i class="fa-solid fa-pen-to-square"></i></button></td>
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
 
export default Posts;