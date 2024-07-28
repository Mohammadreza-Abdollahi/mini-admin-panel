import { JpAxios } from "../axios/JpAxios";

export const addService = async (userData , setUserData , Alert)=>{
    await JpAxios.post(`/users` , userData).then(res=>{
        console.log(res);
        if(res.status === 201){
            Alert("موفق",`کاربر ${userData.name} با موفقیت ایجاد شد`,"success",2);
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
export const updateService = async (userId , userData , Alert)=>{
    await JpAxios.put(`/users/${userId}` , userData).then(res=>{
        if(res.status === 200){
            Alert("موفق",`کاربر ${userData.name} با موفقیت ویرایش شد`,"success",2)
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
export const deleteUser = (id , users , setUsers , Alert)=>{
    JpAxios.delete(`/users/${id}`).then(res=>{
        if(res.status === 200){
            const newUser = users.filter(u=> u.id !== id);
            setUsers(newUser);
            Alert("موفق","کاربر مورد نظر با موفقیت حذف شد!","success",2)
        }else{
            Alert("خطا","حذف کاربر با خطا مواجه شد!","error",2)
        }
    })
}