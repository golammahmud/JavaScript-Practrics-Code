
url='https://fakestoreapi.com/products/1'

const getProducts=async()=>{
    const response = await fetch(url)
    if (response.status===200) {
        const products = await response.json()

        let item=products.rating
        console.log(item)
        document.getElementById("apitest").innerHTML=products.title
    }
    else {
        throw new Error(response.status)
    }
   
// 
}

getProducts()