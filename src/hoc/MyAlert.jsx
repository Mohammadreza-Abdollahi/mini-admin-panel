import Swal from "sweetalert2"

const MyAlert = (MainComponent)=>{
    const newComponent = (props)=>{
        const Alert = (title , text , icon , time)=>{
            Swal.fire({
                title: title,
                text: text,
                icon: icon,
                showConfirmButton: false,
                timer: time * 1000
            });
        }
        const Confirm = async (title , text , icon , confirmText , cancelText) => {
            return await Swal.fire({
                title: title,
                text: text,
                icon: icon,
                showCancelButton: true,
                confirmButtonColor:"#F99417",
                cancelButtonColor: "#dd3446",
                confirmButtonText: confirmText,
                cancelButtonText: cancelText,
            }).then((result) => {
                return result.isConfirmed;
            });
        };
        
        return <MainComponent {...props} Alert={Alert} Confirm={Confirm}/>
    }
    return newComponent
}
export default MyAlert;