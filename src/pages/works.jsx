import { useReducer } from 'react';
import style from '../assets/css/style.module.css';
const myReducer = (state , action)=>{
    // if(action === 'increament') return state + 1;
    // if(action === 'decreament') return state - 1;
    // if(action === 'reset') return 0;
    switch (action) {
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'reset':
            return 0
        default:
            return state
    }
}
const Works = () => {
    const [count , dispatch] = useReducer(myReducer , 0)
    return ( 
        <>
            <section className={`${style.component_size}`}>
                <h2 className={`${style.heading_title}`}>مدیریت کارها</h2>
                <section>
                    <h1 className={`${style.heading_title}`}>{count}</h1>
                    <button onClick={()=>dispatch('increament')} className={`${style.my_btn}`}>افزایش</button>
                    <button onClick={()=>dispatch('decreament')} className={`${style.my_btn}`}>کاهش</button>
                    <button onClick={()=>dispatch('reset')} className={`${style.my_btn}`}>ریست</button>
                </section>
            </section>
        </>
     );
}
 
export default Works;