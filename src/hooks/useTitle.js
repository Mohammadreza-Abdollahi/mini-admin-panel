import { useEffect } from "react";

const useTitle = (pageName)=>{
    useEffect(()=>{
        document.title = `پنل مدیریت | ${pageName}`
    })
}
export default useTitle;