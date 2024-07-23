import style from '../style.module.css'
const AddUser = () => {
    return ( 
        <>
            <section className={`${style.add_user_cont}`}>
                <div className={`${style.add_user_form_sec}`}>
                    <label htmlFor="name">نام و نام خانوادگی</label>
                    <input type="text" name="name" id="name" placeholder='نام و نام خانوادگی'/>
                </div>
                <div className={`${style.add_user_form_sec}`}>
                    <label htmlFor="username">نام کاربری</label>
                    <input type="text" name="username" id="username" placeholder='نام کاربری'/>
                </div>
                <div className={`${style.add_user_form_sec}`}>
                    <label htmlFor="email">ایمیل</label>
                    <input type="email" name="email" id="email" placeholder='ایمیل'/>
                </div>
                <div className={`${style.add_user_form_sec}`}>
                    <label htmlFor="address">ادرس</label>
                    <div className={`${style.add_user_form_row}`}>
                        <input type="text" name='address' id='address' placeholder='شهر...'/>
                        <input type="text" name='address' id='address' placeholder='خیابان'/>
                    </div>
                    <div className={`${style.add_user_form_row}`}>
                        <input type="text" name='address' id='address' placeholder='ادامه ادرس...'/>
                        <input type="number" name='address' id='address' placeholder='کد پستی'/>
                    </div>
                </div>
                <div className={`${style.add_user_form_btns}`}>
                    <button className={`${style.btn_1}`}>ذخیره</button>
                    <button className={`${style.btn_2}`}>بازگشت</button>
                </div>
            </section>
        </>
     );
}
 
export default AddUser;