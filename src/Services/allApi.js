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

export const edituser = async(userid,reqBody)=>{
   return await commonAPI("PUT",`${BASEURL}/edituser${userid}`,reqBody,"")
}
// export const getfurforadmin = async()=>{
//    return await commonAPI("GET",`${BASEURL}/admingetfur`,"","")
// }

export const deletefur=async(fid)=>{
   return await commonAPI("DELETE",`${BASEURL}/deletefur`,{fid},"")
}