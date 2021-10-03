
url='https://fakestoreapi.com/products/1'

fetch(url)
  .then(response => response.json())
  // .then(json => document.getElementById("demo").innerHTML=JSON.stringify(json))
  .then(json => document.getElementById("demo").innerHTML=JSON.stringify(json))
  
  // Add new product


//   fetch('https://fakestoreapi.com/products',{
//     method:"POST",
//     headers:{
//       "content-type": "application/json"
//     },
//     body:JSON.stringify(
//         {
//             title: 'test product',
//             price: 13.5,
//             description: 'lorem ipsum set',
//             image: 'https://i.pravatar.cc',
//             category: 'electronic'
//         }
//     )
// })
//     .then(res=>res.json())
//     .then(json=>console.log(json))
//     .catch(res=>console.log(res))




// Update a product
// fetch('https://fakestoreapi.com/products/7',{
//             method:"PUT",
//                 headers:{
//       "content-type": "application/json"
//     },
//             body:JSON.stringify(
//                 {
//                     title: 'test my api product',
//                     price: 13.5,
//                     description: 'lorem ipsum set',
//                     image: 'https://i.pravatar.cc',
//                     category: 'electronic'
//                 }
//             )
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))





// fetch('https://fakestoreapi.com/products/6',{
//             method:"DELETE"
//         })
//             .then(res=>res.json())
//             .then(json=>console.log(json))


// getText('https://fakestoreapi.com/products')
// async function getText(file) {
//   let myObject = await fetch(file);
//   let myText = await myObject.text();
  
// }