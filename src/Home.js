import React from 'react';
import './Home.css';
import Product from './Product';

function Home () {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
          //   src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12365478"
            title="Cadbury Celebrations Assorted Chocolate Gift Pack, 186.6g - Pack of 2"
            price={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71nJeIoJE0L._SX679_.jpg"
            rating={5}
          />

          <Product
            id="12321341"
            title="Apple iPhone 11 (128GB) - Black"
            price={1000}
            image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="12321341"
            title="The lean startup"
            price={50}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />

          <Product
            id="15265789"
            title="Samsung 6.2 kg Fully-Automatic Top load Washing Machine"
            price={1000}
            image="https://m.media-amazon.com/images/I/81Qqj2C2RzL._AC_UY218_.jpg"
            rating={2}
          />
          <Product
            id="15265789"
            title="Samsung el Core m3, 4GB RAM, 64GB eMMC, 13MP Camera"
            price={5990}
            image="https://m.media-amazon.com/images/I/81xZroil3kL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="12686446"
            title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV"
            price={1500}
            image="https://images-na.ssl-images-amazon.com/images/I/71sBGR6LZhL._SX679_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
