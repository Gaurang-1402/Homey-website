import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Row, Col, ListGroup, Image, Card, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import Message from "../components/Message"
import CheckoutSteps from "../components/CheckoutSteps"
import { createOrder } from "../actions/orderActions"
import { ORDER_CREATE_RESET } from "../constants/orderConstants"
import { USER_DETAILS_RESET } from "../constants/userConstants"
import screen3 from "./ScreenImages/screen3.png"
import FormContainer from "../components/FormContainer"

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)

  // if (!cart.shippingAddress.address) {
  //   history.push('/shipping')
  // } else if (!cart.paymentMethod) {
  //   history.push('/payment')
  // }
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
      dispatch({ type: USER_DETAILS_RESET })
      dispatch({ type: ORDER_CREATE_RESET })
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <>
      <div>
        <img src={screen3}></img>

        <FormContainer>
          <Button
            type='button'
            className='btn-block'
            disabled={cart.cartItems === 0}
            onClick={placeOrderHandler}
            variant='primary'
          >
            Book an appointment
          </Button>
        </FormContainer>
      </div>
    </>
  )
}

export default PlaceOrderScreen
