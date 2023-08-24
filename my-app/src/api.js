
export const fetchUsers =async(query)=>{

  const response =await fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
  const data= await response.json()
  return data;  
}