import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { incrementcart,decrementcart } from './reducer'
const Products = () => {
  const cartcount = useSelector(state => state.cartreducer.cartvalues.length);
  const cartprice = useSelector(state => state.cartreducer.totalprice);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const pro = await res.json();
      setProduct(pro);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <div>
      <div className='text-center mt-5'>
        <input type='text' placeholder='search here...' onChange={e => setQuery(e.target.value)} />
        <button className='btn btn-primary m-5'>Cart items: {cartcount}</button>
        <button className='btn btn-primary m-5'>Cart price: { cartprice.toFixed(1)}</button> {/* Ensure to handle NaN */}
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3">
          {product.filter(user => user.title.includes(query)).map((item, index) => (
            <div className="col mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <center>
                    <img src={item.image} alt="" width="180" height="180" />
                  </center>
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.price}</p>
                  <button className='btn btn-primary m-5' onClick={() => dispatch(incrementcart({
  productname: item.title,
  productprice: item.price // Make sure to include the product price
}))}>ADD</button>
<button className='btn btn-danger' onClick={() => dispatch(decrementcart({
  productname: item.title,
  productprice: item.price // Make sure to include the product price
}))}>REMOVE</button>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Products
