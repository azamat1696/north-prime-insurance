const parseData = (data) => {
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key,data[key]))
    return formData
}


function request(url,data=null,method='GET',type='FORM_DATA'){
  return new Promise(async (resolve,reject)=>{
      const options = {
            method
      }
      if(data && method === 'POST'){
          options.body = type === 'JSON' ? JSON.stringify(data) : parseData(data)
      }
     const response =  await fetch(process.env.API_URL+url,options)
      if (response.ok){
          const json = await response.json()
          resolve(json)
        }else{
          reject(response)
      }

  })
}

export const post = (url,data) => request(url,data,'POST')
export const postJson = (url,data) => request(url,data,'POST','JSON')
export const get = (url) => request(url,null,'GET')