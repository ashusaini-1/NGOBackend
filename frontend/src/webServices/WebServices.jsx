import axios from 'axios'

export const userSignup = (data) => {
    const formData = new FormData();
    formData.append("userName",data.userName);
    formData.append("email",data.email);
    formData.append('contact',data.number);
    formData.append('password',data.password);
  
   
formData.forEach((key,value)=>{
console.log(key,value)
})

    return axios.post(`/api/signup`, formData);
  }
  