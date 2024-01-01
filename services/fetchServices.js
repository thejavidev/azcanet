import axios from "axios";


export const Get = ()=>{
    return new Promise((resolve,reject)=>{
        axios.get(`${process.env.NEXT_PUBLIC_API}`)
        .then(response =>resolve(response?.data))
        .catch(error =>console.log(error.response.data))
    })
}