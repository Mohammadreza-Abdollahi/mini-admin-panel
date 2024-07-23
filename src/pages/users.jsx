import { Link } from 'react-router-dom';
import style from '../style.module.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useEffect, useState } from 'react';
const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(res=>
            setUsers(res.data)
        ).catch(err=>
            console.log(err)
        )
    },[]);
    const handleDelete = (id)=>{
        Swal.fire({
            title: "حذف کاربر!",
            text: "ایا از حذف این کاربر اطمینان دارید؟",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#F99417",
            cancelButtonColor: "#dd3446",
            confirmButtonText: "بله ، حذف شود",
            cancelButtonText: "بازگشت",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "موفق",
                text: "کاربر مورد نظر با موفقیت حذف شد!",
                icon: "success"
              });
            }
          });
    }
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت کاربران</h2>
                <div className={`${style.search_sec}`}>
                    <div>
                        <input className={`${style.search_inp}`} type="text" placeholder='جستجو...'/>
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
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td colSpan={3}>{item.email}</td>
                                <td colSpan={2}><button onClick={(id)=>handleDelete(id)} className={`${style.trash}`}><i class="fa-solid fa-trash"></i></button><Link to='/user/add/2'><button className={`${style.rename}`}><i class="fa-solid fa-pen-to-square"></i></button></Link></td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                : 
                <div className={`${style.user_err}`}>
                    <h1>هیچ کاربری موجود نیست!!</h1>
                    <h1>لطفا کمی صبر کنید...</h1>
                </div>}
                </div>
            </section>
        </>
     );
}
 
export default Users;