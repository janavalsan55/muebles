import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";


// register API
export const registerAPI = async(user)=>{
   return await commonAPI("POST",`${BASEURL}/registeruser`,user,"")
}

export const loginAPI = async(user)=>{
    return await commonAPI("POST",`${BASEURL}/loginuser`,user,"")
 }

 export const addfurAPI = async(fur,header)=>{
   return await commonAPI("POST",`${BASEURL}/addfur`,fur,header)
}

export const getfurAPI = async()=>{
   return await commonAPI("GET",`${BASEURL}/allfur`,"","")
}

export const getusers = async()=>{
   return await commonAPI("GET",`${BASEURL}/allusers`,"","")
}



export const deleteuser=async(userid)=>{
   return await commonAPI("DELETE",`${BASEURL}/deleteuser`,{userid},"")
}

// export const getbikesforadmin = async()=>{
//    return await commonAPI("GET",`${BASEURL}/admin/getbikes`,"","")
// }

// export const deletebike=async(bikeid)=>{
//    return await commonAPI("DELETE",`${BASEURL}/deletebike`,{bikeid},"")
// }