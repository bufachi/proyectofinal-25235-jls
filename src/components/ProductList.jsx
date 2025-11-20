import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { CartContext } from './CartContext';

const ProductList = ({ category = null, price = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useContext(CartContext);

  useEffect(() => {

    let url = '';
        if (price !== null) {
     url = 'https://6904bf9e6b8dabde4964f87f.mockapi.io/productos';
    }
       else if (category) {
     
      url = `https://mockapi.com/productos/category/${category}`;
    }

     else {
      url = 'https://6904bf9e6b8dabde4964f87f.mockapi.io/productos';
    }
    
 fetch(url)
      .then(response => response.json())
      .then(data => {
        let filtered = data;

        // Elementos filtrados = a 50
      if (price !== null) {
        console.log("➡️ Aplicando filtro de precio IGUAL A ", price);
        filtered = data.filter(p => {
          console.log("Comparando", p.price, "==", price);
          return Number(p.price) === Number(price);
        });
      }

        setProducts(filtered);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });

  }, [category, price]);

  if (loading) return <div>Loading...</div>;
console.log("PROPS → category:", category, "price:", price);

  return (
    <Row>
      {products.map(product => (
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductList;


    