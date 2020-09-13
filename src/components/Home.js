import React from "react";
import Product from "./Product";


import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        {/* Product has id, title , price, rating, image */}
        {/* Product */}
        <Product
          id="42321341"
          title="Samsung Galaxy Tab S7+ Wifi Android Tablet Mystic Black"
          price={799.98}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816sWBc5fTL._AC_SL1500_.jpg"
        />
        <Product
          id="12321341"
          title="Hedera Helix, Set of 3, Ivy, White Coloured Leaves, 9cm Pot"
          price={6.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61n633OPIjL._AC_SL1200_.jpg"
        />
        <Product
          id="22321341"
          title="Tooarts Cat Band Sculpture Set 3 Playing Music Cats Gifts Metal Ornament"
          price={28.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Yd8LIYkYL._AC_SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product has id, title , price, rating, image */}
        {/* Product */}
        <Product
          id="52321341"
          title="Ultrasport F-Bike and F-Rider, Fitness Bike Trainer"
          price={101.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/715Tt8JTyFL._AC_SL1500_.jpg"
        />
        
        <Product
          id="97899931"
          title="iSunday Simulated Dog Model, Realistic Yorkie Dog Simulation Toy Dog Puppy"
          price={24.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61CCe4ap0eL._AC_SL1001_.jpg"
        />
        <Product
          id="10319841"
          title="Hybrid Noise Cancelling Headphones, Mpow H12 Bluetooth 5.0 Headphones Over Ear, Hi-Fi Deep Bass Wireless Headphones with Mic"
          price={52.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61y1h8yb5CL._AC_SL1280_.jpg"
        />
        <Product
          id="62319841"
          title="LEGO 31313 Mindstorms EV3 Robotics Kit, 5 in 1 App Controlled Model with Programmable Interactive Toy Robot"
          price={249.97}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91Z6nH%2BZ9pL._AC_SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        {/* Product has id, title , price, rating, image */}
        {/* Product */}
        <Product
          id="62394741"
          title="A Guide to the Good Life: The Ancient Art of Stoic Joy"
          price={10.21}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61KZUu2TOrL.jpg"
        />
        <Product
          id="67821876"
          title="MSI NVIDIA GEFORCE RTX 2080Ti GAMING X TRIO Graphics Card"
          price={1149}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/719BM%2BsoIqL._AC_SL1500_.jpg"
        />
        <Product
          id="70321341"
          title="Homestead Brown Half Barrel Cask Planter - Large, Set of 2 Pots - 22cm (H) x 40cm (Dia)"
          price={24.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71W%2Bw7tSc2L._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
