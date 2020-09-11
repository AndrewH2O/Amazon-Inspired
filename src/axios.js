import axios from "axios";
import stripeKey from "./stripe-testKey.json";

const instance = axios.create({
  // THE API (cloud function) URL
  baseUrl: '...' // API URL - cloud function
});

export const getStripeKey = ()=>{
  return stripeKey["test-key"];
};
  
export default instance;