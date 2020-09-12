import React, { useState, useEffect } from 'react';
import { useStateValue } from '../dataLayer/StateProvider';
import { db } from "../firebase";
import Order from "./Order";
import './Orders.css';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();

  // brackets [user] so this user dependency shouldnt change avoid re-running so this will only run once
  // setOrders iterates list and sets state so we can view them 
  // it gets them its not setting them on db just get snapshot of db in real time and setState on our hook
  // like a spy snapshotting docs.
  useEffect(()=>{
    if(user) {
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapshot => (
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))
      ))
    } else {
      setOrders([])
    }
    
  },[user])

  return (
    <div>
      <div className="orders">
        <h1>Your Orders</h1>
        <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
      </div>
    </div>
  )
}

export default Orders
