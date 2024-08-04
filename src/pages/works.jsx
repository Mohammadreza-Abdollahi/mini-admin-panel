import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import useTitle from '../hooks/useTitle';
import { getWorksService } from '../services/WorksService';

const Works = () => {
    useTitle('کارها')
    const [works,setWorks] = useState([])
    const [mainWorks,setMainWorks] = useState([])
    const handleSearch = (e)=>{
        setWorks(mainWorks.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    useEffect(()=>{
        getWorksService(setWorks,setMainWorks)
    },[])
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت کارها</h2>
                <div className={`${style.search_sec}`}>
                    <div>
                        <input onChange={(e)=>handleSearch(e)} className={`${style.search_inp}`} type="text" placeholder='جستجو...'/>
                    </div>
                    <div>
                        <button className={`${style.add_btn}`}>افزودن</button>
                    </div>
                </div>
                <div>
                    {1 !== 0 ? 
                    <table className={`${style.user_table}`}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>شناسه کاربر</th>
                                <th>عنوان</th>
                                <th>وضعیت</th>
                                <th>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {works.map(item=>{
                                return(
                                <tr key={item.id}  className={item.completed ? style.completed : style.not_completed}>
                                    <td>{item.id}</td>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed ? 'انجام شده' : 'انجام نشده'}</td>
                                    <td><button className={`${item.completed ? style.danger : style.success}`}><i class={item.completed ? "fa-solid fa-xmark" : "fa-solid fa-check"}></i></button><button className={`${style.danger}`} title='حذف'><i class="fa-solid fa-trash"></i></button><button className={`${style.warning}`} title='ویرایش'><i class="fa-solid fa-pen-to-square"></i></button></td>
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
 
export default Works;