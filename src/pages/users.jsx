import { Link } from 'react-router-dom';
import style from '../style.module.css';
const Users = () => {
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
                            <tr>
                                <td>1</td>
                                <td>Mohammad</td>
                                <td>mohammad1384</td>
                                <td colSpan={3}>mohammad1384abdollahi@gmail.com</td>
                                <td colSpan={2}><button className={`${style.trash}`}><i class="fa-solid fa-trash"></i></button><Link to='/user/add/2'><button className={`${style.rename}`}><i class="fa-solid fa-pen-to-square"></i></button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
     );
}
 
export default Users;