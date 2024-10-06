import React,{useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import products from '../../Data/productsData.json'
import Navbar from '../shared/navbar/Navbar'
import { addToDB } from '../../utilities/LocalDB'
import Swal from 'sweetalert2'


const Product = () => {
   const navigate = useNavigate()
    const {id} = useParams();
    const product = products.find(pd=>pd.id===id)
    
    const[cart,setCart] = useState([]);
  const addToCart=(product)=>{
      shoppingCart(product)
    Swal.fire({
      title: "Successful!",
      text: `You have added ${product.name}!`,
      icon: "success"
    });
  }
  const shoppingCart=(product)=>{
    setCart([...cart,product]);
    addToDB(product.id);

  }
  const handleClick=(product)=>{
    shoppingCart(product)
    navigate('/shipping')
  }
  
    
  return (
    <section className='bg-brand bg-brand-container'>
      <Navbar/>
        <div className="container">
          <h1 className='fs-4 mt-5 text-center'>Product Details</h1>
          <div className="row mt-5 justify-content-center align-items-center">

            <div className="col-lg-4">
              <img style={{borderRadius:'1rem', boxShadow:'0 5px 15px #c4c4c44d'}} src={product.image} className='img-fluid mx-auto d-block mb-3'width={250} alt={product.name} />
              <div className="d-flex justify-content-center align-items-center mt-2">
                <button onClick={()=>addToCart(product)} className='btn btn-dark mt-2 fw-bold'>Add to Cart</button>
                <button onClick={()=>handleClick(product)} className='btn btn-success mt-2 ms-2'>Buy Now</button>
              </div>
            </div>

            <div className="col-lg-8 mb-3">
              <div style={{borderRadius:'1rem', boxShadow:'0 5px 15px #c4c4c44d'}} className='bg-white p-5 mt-4 mx-auto'>
                <h3 className='fs-5 fw-bold' >{product.name}</h3>
                <hr />
                <p style={{textAlign:'justify'}} className='fs-6'>{product.description}</p>
                <hr />
                <small>Price: <span className='fs-5 fw-bold'>{product.price}</span>Taka</small>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Product