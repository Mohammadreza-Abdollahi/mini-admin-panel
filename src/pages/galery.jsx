import { useEffect, useReducer } from 'react';
import style from '../assets/css/style.module.css';
import { JpAxios } from '../axios/JpAxios';
import useTitle from '../hooks/useTitle';
import { galleryReducer, init } from '../reducer/GalleryReducer';

const Galery = () => {
  const [data, dispatch] = useReducer(galleryReducer, init);
  useTitle('گالری')
  useEffect(() => {
    JpAxios.get('/photos').then(res => {
      dispatch({
        type: 'getPhotos',
        payload: res.data
      })
    })
    JpAxios.get('/albums').then(res => {
        dispatch({
          type: 'getAlbums',
          payload: res.data
        })
      })
  }, [])

  useEffect(() => {
    dispatch({
      type: 'filterPhotos'
    })
  }, [data.albumId, data.photos])

  return (
    <>
      <section className={`${style.component_size}`}>
        <h2 className={`${style.heading_title}`}>مدیریت گالری</h2>
        <div className={`${style.search_sec}`}>
          <div>
            <select value={data.albumId} dir='ltr' onChange={(e)=>dispatch({type: 'changeAlbumId',payload: e.target.value})} className={`${style.search_inp}`}>
                {
                    data.albums.map(item=>{
                        return(
                            <option key={item.id} value={item.id}>{item.title}</option>
                        )
                    })
                }
            </select>
          </div>
          <div>
            {/* <button className={`${style.add_btn}`}>افزودن</button> */}
          </div>
        </div>
        <section className={`${style.gallery_cont}`}>
          {
            data.filteredPhotos.map(item => {
              return (
                <div key={item.id} className={`${style.gallery_item_cont}`}>
                  <img  src={item.url} alt={`Image ${item.id}`} />
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