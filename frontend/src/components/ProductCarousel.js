import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Carousel, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Loader from "./Loader"
import Message from "./Message"
import { listTopProducts } from "../actions/productActions"

import slide01 from "../CarouselImages/slide1.png"
import slide02 from "../CarouselImages/slide2.png"
import slide03 from "../CarouselImages/slide3.png"

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>


    <Carousel.Item>
    <Image src={slide01} alt='First slide' fluid />
    </Carousel.Item>


      <Carousel.Item>
        <img src={slide02} alt='Second slide'  />
      </Carousel.Item>

      <Carousel.Item>
        <img src={slide03} alt='Third slide' />
      </Carousel.Item>
      {/* {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))} */}
    </Carousel>
  )
}

export default ProductCarousel
