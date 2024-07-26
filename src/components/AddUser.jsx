import { useNavigate, useParams } from 'react-router-dom';
import style from '../style.module.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const AddUser = () => {
    const navigate = useNavigate();
    const {userId} = useParams();
    const [userData , setUserData] = useState({
        name: "",
        username: "",
        email: "",
        address :{
            street: "",
            city: "",
            suite: "",
            zipcode: ""
        }
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!userId){
            axios.post('https://jsonplaceholder.typicode.com/users' , userData).then(res=>{
                console.log(res);
                if(res.status === 201){
                    Swal.fire({
                        title: "موفق",
                        text: `کاربر ${userData.name} با موفقیت ایجاد شد`,
                        icon: "success"
                    });
                    setUserData({
                        name: "",
                        username: "",
                        email: "",
                        address :{
                            street: "",
                            city: "",
                            suite: "",
                            zipcode: "",
                        }});
                }
            })
        }else{
            axios.put(`https://jsonplaceholder.typicode.com/users/${userId}` , userData).then(res=>{
                if(res.status === 200){
                    Swal.fire({
                        title: "موفق",
                        text: `کاربر ${userData.name} با موفقیت ویرایش شد`,
                        icon: "success"
                    });
                }
            })
        }
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res=>{
            console.log(res);
            setUserData({
                name: res.data.name,
                username: res.data.username,
                email: res.data.email,
                address :{
                    street: res.data.address.street,
                    city: res.data.address.city,
                    suite: res.data.address.suite,
                    zipcode: res.data.address.zipcode,
                }});
        })
    },[])
    return ( 
        <>
            <section className={`${style.add_user_cont}`}>
                <h2 className={`${style.heading_title}`}>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h2>
                <form action="">
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="name">نام و نام خانوادگی</label>
                        <input type="text" name="name" id="name" placeholder='نام و نام خانوادگی' value={userData.name} onChange={(e)=>{setUserData({...userData , name: e.target.value})}}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="username">نام کاربری</label>
                        <input type="text" name="username" id="username" placeholder='نام کاربری' value={userData.username} onChange={(e)=>setUserData({...userData , username: e.target.value})}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="email">ایمیل</label>
                        <input type="email" name="email" id="email" placeholder='ایمیل' value={userData.email} onChange={(e)=>setUserData({...userData , email: e.target.value})}/>
                    </div>
                    <div className={`${style.add_user_form_sec}`}>
                        <label htmlFor="address">ادرس</label>
                        <div className={`${style.add_user_form_row}`}>
                            <input type="text" name='address' id='address' placeholder='شهر' value={userData.address.city} onChange={(e)=>setUserData({...userData , address: {...userData.address , city: e.target.value}})}/>
                            <input type="text" name='address' id='address' placeholder='خیابان' value={userData.address.street} onChange={(e)=>setUserData({...userData , address: {...userData.address , street: e.target.value}})}/>
                        </div>
                        <div className={`${style.add_user_form_row}`}>
                            <input type="text" name='address' id='address' placeholder='ادامه ادرس' value={userData.address.suite} onChange={(e)=>setUserData({...userData , address: {...userData.address , suite: e.target.value}})}/>
                            <input type="number" name='address' id='address' placeholder='کد پستی'  value={userData.address.zipcode} onChange={(e)=>setUserData({...userData , address: {...userData.address , zipcode: e.target.value}})}/>
                        </div>
                    </div>
                    <div className={`${style.add_user_form_btns}`}>
                        <button onClick={(e)=>handleSubmit(e)} type='submit' className={`${style.btn_1}`}>{userId ? "ویرایش کاربر" : "ایجاد کاربر جدید"}</button>
                        <button onClick={()=>navigate("/user")} className={`${style.btn_2}`}>بازگشت</button>
                    </div>
                </form>
            </section>
        </>
     );
}
 
export default AddUser;