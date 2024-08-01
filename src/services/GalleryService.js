import { JpAxios } from "../axios/JpAxios";

export const getGalleryPhotos = async (setMainPhotos)=>{
    await JpAxios.get('/photos').then(res=>{
        setMainPhotos(res.data)
    })
}