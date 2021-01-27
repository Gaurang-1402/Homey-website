import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'
import screen2 from "./ScreenImages/screen2.png"

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    // e.preventDefault()
    dispatch(savePaymentMethod('Paypal'))
    history.push('/placeorder')
  }

  return (

    <div>
    <img className='img-fluid' src={screen2}></img>
    <FormContainer>

      <Form onSubmit={submitHandler}>

        <Button type='submit'    className='btn-block' variant='primary'>
          Next Step
        </Button>
      </Form>
    </FormContainer>
    </div>
  )
}

export default PaymentScreen
