import Swal from "sweetalert2";
import { JpAxios } from "../axios/JpAxios";

export const addService = async (userData , setUserData)=>{
    await JpAxios.post(`/users` , userData).then(res=>{
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
}
export const updateService = async (userId , userData)=>{
    await JpAxios.put(`/users/${userId}` , userData).then(res=>{
        if(res.status === 200){
            Swal.fire({
                title: "موفق",
                text: `کاربر ${userData.name} با موفقیت ویرایش شد`,
                icon: "success"
            });
        }
    })
}
export const getByUserIdService = async (userId , setUserData)=>{
    await JpAxios.get(`users/${userId}`).then(res=>{
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
}
export const getUsers = async (setUsers , setMainUsers)=>{
    await JpAxios.get('/users').then(res=>{
        setUsers(res.data)
        setMainUsers(res.data)
    })
}
export const deleteUser = (id , users , setUsers)=>{
    JpAxios.delete(`/users/${id}`).then(res=>{
        console.log(res);
        if(res.status === 200){
            const newUser = users.filter(u=> u.id !== id);
            setUsers(newUser);
            Swal.fire({
                title: "موفق",
                text: "کاربر مورد نظر با موفقیت حذف شد!",
                icon: "success"
            });
        }else{
            Swal.fire({
                title: "خطا",
                text: "حذف کاربر با خطا مواجه شد!",
                icon: "error"
            });
        }
    })
}