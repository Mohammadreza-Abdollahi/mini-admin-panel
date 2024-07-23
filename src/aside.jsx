import style from './style.module.css';
import profile from "./profile.png"
import { useContext } from 'react';
import { MainContext } from './context/mainContext';
import { NavLink } from 'react-router-dom';
import './css/nav.css'
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
                        <nav className={`${style.aside_nav_ul}`}>
                                <NavLink className={({isActive})=>{return isActive ? "aside-nav-item-active" : "aside-nav-item"}} to={"/user"}>کاربران</NavLink>
                                <NavLink className={({isActive})=>{return isActive ? "aside-nav-item-active" : "aside-nav-item"}} to={"/posts"}>پست ها</NavLink>
                                <NavLink className={({isActive})=>{return isActive ? "aside-nav-item-active" : "aside-nav-item"}} to={"/galery"}>گالری</NavLink>
                                <NavLink className={({isActive})=>{return isActive ? "aside-nav-item-active" : "aside-nav-item"}} to={"/works"}>کارها</NavLink>
                        </nav>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Aside;