import axios from "axios";
import stripeKey from "./stripe-testKey.json";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/clone-b5ea1/us-central1/api'
})

export const getStripeKey = ()=>{
  return process.env.REACT_APP_STRIPE_TEST_KEY;
};
  
export default instance;