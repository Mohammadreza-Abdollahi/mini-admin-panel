import { useEffect, useState } from 'react';
import style from '../assets/css/style.module.css';
import { getGalleryPhotos } from '../services/GalleryService';

const Galery = () => {
    const [photos , setPhotos] = useState([]);
    const [mainPhotos , setMainPhotos] = useState([]);
    const [albumId , setAlbumId] = useState(1);
    useEffect(()=>{
        getGalleryPhotos(setMainPhotos)
        setPhotos(mainPhotos.filter(item=>item.albumId === albumId));
        console.log(photos);
    },[albumId,mainPhotos])
    return (
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت گالری</h2>
                <div className={`${style.search_sec}`}>
                    <div>
                        <input value={albumId} onChange={(e)=>setAlbumId(e.target.value)} className={`${style.search_inp}`} type="number" placeholder='جستجوی با شناسه البوم...'/>
                    </div>
                    <div>
                        <button className={`${style.add_btn}`}>افزودن</button>
                    </div>
                </div>
                <section className={`${style.gallery_cont}`}>
                    {
                        photos.map(item=>{
                            return(
                                <div key={item.id} className={`${style.gallery_item_cont}`}>
                                    <img src={item.url} alt={`Image ${item.id}`} />
                                </div>
                            )
                        })
                    }
                </section>
            </section>
        </>
     );
}
 
export default Galery;