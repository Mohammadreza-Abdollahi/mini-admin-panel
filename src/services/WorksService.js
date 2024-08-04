import { JpAxios } from "../axios/JpAxios"

export const getWorksService = async (setWorks , setMainWorks)=>{
    await JpAxios.get('/todos').then(res=>{
        setWorks(res.data)
        setMainWorks(res.data)
    })
}