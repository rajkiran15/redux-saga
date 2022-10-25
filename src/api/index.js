import axios from "axios";
class API{
     get(url){
        return new Promise(async (resolve,reject)=>{
              try{
                  const data=await axios.get(url);
                  resolve(data.data);
              }catch(err){
                  reject(err);
              }
        });
     }
     post(){

     }
}

export const api=new API();