import React, { useState , useEffect} from 'react';
import axios from 'axios';
// import React, {useContext, useState, useReducer, useEffect} from 'react'


// const Wishlist=()=>{

// const product=[
//     {Name: "Men's Mountain Bike", price: 350, unit:1},
//     {Name: "Men's Road Bike", price: 300, unit:1},
//     {Name: "Woman's Mountain Bike", price: 150, unit:1},
//     {Name: "Woman's Road Bike", price: 1250, unit:1},
//     {Name: "Boys's Mountain Bike", price: 100, unit:1},
//     {Name: "Girls's Mountain Bike", price: 100, unit:1},
// ]

// const [total, setTotal]=useState(0)
// const [qty, setQty]=useState(1) 

// const handleClick=e=>{
//     setTotal(prevState=>prevState.price),
//     setQty(e.unit+1)
//     console.log(e)
// };

//     return(
//         <div>
//             {product.map((p))=>
//             <li key={p.name}{p.price}
//         <button onClick={()=>handleClick(p)}>Add to cart</button>
//         &nbsp;{qty}
//         </li>)
//             }
//             Price: {total}
//         </div>
//     )

// }



function HomePage(){
    const [products, setProducts] = useState([])


    //useEffect determines the first thing that will run when the page laods
    useEffect(()=>{
        getProducts()
    },[])

    const getProducts = async () =>{
        let response = await axios.get('https://localhost:44394/api/products')
        //setProduct is talking to products(variable on like 43) and tells it what its value should be
        setProducts(response.data)
    }

    const addToCart = (product) =>{
        console.log(product)
        //post to shopping cart request will go here
    }

    return (
        <div>
            <div className='sybd'>
            <table>
                <thead>
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
            </thead>
                {products.map((element)=>
                <tbody>
                    <tr>
                    <td> {element.name} </td>
                    <td> {element.description}</td>
                    <td> {element.price}</td>
                    <button onClick={()=>addToCart(element.productId)}>Add to cart</button>
                    </tr>
               </tbody> 
               )}
               </table>
            
            </div>
        </div>
    )
    
}

export default HomePage;