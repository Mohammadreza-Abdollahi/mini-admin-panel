import { useContext } from 'react';
import style from './assets/css/style.module.css';
import { MainContext } from './context/mainContext';
import Users from './pages/users';
import Post from './pages/posts';
import Galery from './pages/galery';
import Works from './pages/works';
import AddUser from './components/AddUser';
import { Route, Routes, Navigate } from 'react-router-dom';
import AddPost from './components/AddPost';
import PostComment from './components/PostComment';
import ShowComment from './components/ShowComment';
import ShowPost from './components/ShowPost';
const Content = () => {
    const {showMenu,setShowMenu} = useContext(MainContext);
    const handleShowMenu = (e)=>{
        e.stopPropagation();
        setShowMenu(!showMenu);
        console.log(showMenu);
    }
    return ( 
        <>
            <section onClick={()=>setShowMenu(false)} className={`${style.content_sec}`}>
                <div>
                    <span><i onClick={handleShowMenu} className={`${style.ham_logo} fa-solid fa-bars`}></i></span>
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Navigate to='/user'/>}/>
                        <Route path='/user' element={<Users/>}/>
                        <Route path='/user/add' element={<AddUser/>}>
                            <Route path=':userId'/>
                        </Route>
                        <Route path='/posts' element={<Post/>}/>
                        <Route path='/posts/view/:postId' element={<ShowPost/>}/>
                        <Route path='/posts/:postId/comments' element={<PostComment/>}/>
                        <Route path='/posts/:postId/comments/view/:commentId' element={<ShowComment/>}/>
                        <Route path='posts/add' element={<AddPost/>}>
                            <Route path=':postId'/>
                        </Route>
                        <Route path='/galery' element={<Galery/>}/>
                        <Route path='/works' element={<Works/>}/>
                    </Routes>                    
                </div>
            </section>
        </>
     );
}
 
export default Content;