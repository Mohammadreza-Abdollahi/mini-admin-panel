import { Link } from 'react-router-dom';
import style from '../assets/css/style.module.css';
import { useEffect, useState } from 'react';
import { deleteUser, getUsers } from '../services/UserService';
import MyAlert from '../hoc/MyAlert';
import useTitle from '../hooks/useTitle';
const Users = (props) => {
    const { Alert , Confirm } = props;
    const [users,setUsers] = useState([]);
    const [mainUsers,setMainUsers] = useState([]);
    useTitle('کاربران')
    useEffect(()=>{
        getUsers(setUsers , setMainUsers)
    },[]);
    const handleDelete = async (id)=>{
        if(await Confirm("حذف کاربر!","ایا از حذف این کاربر اطمینان دارید؟","warning","بله ، حذف شود","بازگشت")){
            deleteUser(id , users , setUsers , Alert);
        }
    }
    const handleSearch = (e)=>{
        setUsers(mainUsers.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت کاربران</h2>
                <div className={`${style.search_sec}`}>
                    <div>
                        <input className={`${style.search_inp}`} type="text" placeholder='جستجو...' onChange={(e)=>handleSearch(e)}/>
                    </div>
                    <div>
                        <button className={`${style.add_btn}`}><Link to="/user/add">افزودن</Link></button>
                    </div>
                </div>
                <div>
                    {users.length !== 0 ? 
                    <table className={`${style.user_table}`}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>نام</th>
                            <th>نام کاربری</th>
                            <th colSpan={3}>ایمیل</th>
                            <th colSpan={2}>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item=>{
                            return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td colSpan={3}>{item.email}</td>
                                <td colSpan={2}><button onClick={()=>handleDelete(item.id)} className={`${style.trash}`} title='حذف'><i class="fa-solid fa-trash"></i></button><Link to={`/user/add/${item.id}`}><button className={`${style.rename}`} title='ویرایش'><i class="fa-solid fa-pen-to-square"></i></button></Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                : 
                <div className={`${style.loading_err}`}>
                    <h1>هیچ کاربری موجود نیست!!</h1>
                    <h1>لطفا کمی صبر کنید...</h1>
                </div>}
                </div>
            </section>
        </>
     );
}
 
export default MyAlert(Users);