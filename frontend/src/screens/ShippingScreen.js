import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { saveShippingAddress } from "../actions/cartActions"
import screen1 from "./ScreenImages/screen1.png"
// import screen2 from "../ScreenImages/screen2.png"
// import screen3 from "../ScreenImages/screen3.png"

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState("yes")
  const [city, setCity] = useState("yes")
  const [postalCode, setPostalCode] = useState("yes")
  const [country, setCountry] = useState("yes")

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    history.push("/payment")
  }

  return (
    <div>
      <img src={screen1}></img>

      {/* <img src=></img> */}

      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Button type='submit'         className='btn-block'f variant='primary'>
            Next step
          </Button>
        </Form>
      </FormContainer>
    </div>
  )
}

export default ShippingScreen
