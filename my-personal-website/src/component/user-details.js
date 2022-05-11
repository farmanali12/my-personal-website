import user from "../data/user-data";
import { useParams,useSearchParams } from "react-router-dom";
const UserDetails=()=>{
    //access user id from url params
    
    const params=useParams();
    const[searchparams,setsearchparams]=useSearchParams()
    const{userId}=params;
    const getUserName=(id)=>{
      const userdata=  user.filter(({id})=>id===userId);
      if(!userdata||userdata.length===0){
return "no user found"
      }
      return userdata[0].name
    }
return(
  <>
<div>USERNAME:{getUserName()}</div>
<div>Search param Filter{searchparams.get("filter")}</div>
</>
);
}
export default UserDetails