import style from './style.module.css';
import profile from "./profile.png"
import { useContext } from 'react';
import { MainContext } from './context/mainContext';
import { Link } from 'react-router-dom';
const Aside = () => {
    const {showMenu} = useContext(MainContext);
    return ( 
        <>
            <section className={`${style.aside_sec}`} style={showMenu ? {right : 0} : {}}>
                <div className={`${style.aside_cont}`}>
                    <div className={`${style.aside_profile_cont}`}>
                        <img className={`${style.profile_img}`} src={profile} alt="" />
                        <span>محمدرضا عبداللهی</span>
                    </div>
                    <div className={`${style.aside_nav_cont}`}>
                        <ul className={`${style.aside_nav_ul}`}>
                            <li className={`${style.aside_nav_li} ${style.aside_nav_li_active}`}>
                                <Link className={`${style.aside_nav_a}`} to="/">کاربران</Link>
                            </li>
                            <li className={`${style.aside_nav_li}`}>
                                <Link className={`${style.aside_nav_a}`} to="posts">پست ها</Link>
                            </li>
                            <li className={`${style.aside_nav_li}`}>
                                <Link className={`${style.aside_nav_a}`} to="galery">گالری</Link>
                            </li>
                            <li className={`${style.aside_nav_li}`}>
                                <Link className={`${style.aside_nav_a}`} to="works">کارها</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Aside;