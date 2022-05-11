import { Outlet } from "react-router-dom";


const User=()=>{
    return(
        <>
        <h2>User page</h2>
        <Outlet/>
        
        </>
    );
}
export default User;