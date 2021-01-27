import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img style= {{height:'300px'}} className='img-fluid' src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='div'>
            <strong>Qualifications: {product.brand}</strong>
          </Card.Text>

          <Card.Text as='div'>
            <strong>Location: {product.category}</strong>
          </Card.Text>

        <Card.Text as='h3'>${product.price}/hour</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
