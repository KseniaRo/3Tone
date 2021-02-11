import { create } from 'apisauce'

const apiClient = create({
  baseURL: "http://192.168.86.71:9000/api"
})
//with this libraries promises are always resolved
// apiClient.get('./listings').then(response=>{
//   if(!response.ok){
//     response.problem
//   }
// })

export default apiClient
