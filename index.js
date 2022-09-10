import axios from 'axios'

const getData= (async(id)=>{
    let {data: user} = await axios ("https://jsonplaceholder.typicode.com/users/" + id)
    let {data: user_post} = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + id)

    const lastData=[user,user_post]
   return lastData
})

 export default getData;

