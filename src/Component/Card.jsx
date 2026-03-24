import React from 'react'
import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className='heading'>
        <h1>featured product</h1>
      </div>

      <div className="card">
        <img
          src="https://saudewala.in/cdn/shop/files/WhatsApp_Image_2024-09-12_at_12.41.21_PM_800x.jpg?v=1726128677"
          alt="Laptop"
          className="card-image"
        />

        <h2 className="card-title">HP Pavilion Laptop</h2>

        <p className="card-price">₹55,000</p>

        <button className="card-button">Add to Cart</button>
      </div>


      <div className="card">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/aw420k/media-gallery/keyboard-aw420k-xkb-05-bk-gallery-01.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=2778&qlt=100,1&resMode=sharp2&size=2778,804&chrss=full"
          alt="Laptop"
          className="card-image"
        />

        <h2 className="card-title">Alienware Tenkeyless Gaming Keyboard - AW420K</h2>

        <p className="card-price">₹3999</p>

        <button className="card-button">Add to Cart</button>
      </div>




      <div className="card">
        <img
          src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/mouse/aw-pro-wireless-mouse/media-galleries/ll/accessories-aw-awmouse-pro-wh-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=1420&qlt=100,1&resMode=sharp2&size=1420,804&chrss=full"
          alt="Laptop"
          className="card-image"
        />

        <h2 className="card-title">Alienware Pro Wireless Gaming Mouse</h2>

        <p className="card-price">₹1999</p>

        <button className="card-button">Add to Cart</button>
      </div>


      <div className="card">
        <img
          src="https://m.media-amazon.com/images/I/71F4B9OwukL._SL1500_.jpg"
          alt="Laptop"
          className="card-image"
        />

        <h2 className="card-title">
          KRYNORCXY Desktop PC – Core i5 2400 CPU, HD Graphics 2000,</h2>

        <p className="card-price">₹15,999</p>

        <button className="card-button">Add to Cart</button>
      </div>




      <div className="card">
        <img
          src="https://m.media-amazon.com/images/I/A1sHjPpz6fL.jpg"
          alt="Laptop"
          className="card-image"
        />

        <h2 className="card-title">Samsung SSD Portable T7 iTB
        </h2>

        <p className="card-price">₹18,489.00</p>

        <button className="card-button">Add to Cart</button>
      </div>

    </div>
  )
}

export default Card