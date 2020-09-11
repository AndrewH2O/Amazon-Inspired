import axios from "axios";
import stripeKey from "./stripe-testKey.json";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export const getStripeKey = ()=>{
  return stripeKey["test-key"];
};
  
export default instance;