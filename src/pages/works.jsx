import style from '../assets/css/style.module.css';
import useTitle from '../hooks/useTitle';

const Works = () => {
    useTitle('کارها')
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت کارها</h2>
                <div className={`${style.search_sec}`}>
                        <div>
                            <input className={`${style.search_inp}`} type="text" placeholder='جستجو...'/>
                        </div>
                        <div>
                            <button className={`${style.add_btn}`}>افزودن</button>
                        </div>
                    </div>
            </section>
        </>
     );
}
 
export default Works;