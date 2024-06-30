import React from 'react'

const TableBooking = () => {
  return (
    <div className="order" id="TableBooking">
      <h1 className="title">Table<span>Booking</span></h1>

      <div className="order_main">

          <div className="order_image">
              <img src="/image/order_image.png"/>
          </div>

          <form action="#">
              <div className="input">
                  <p>Name:</p>
                  <input type="text" placeholder="" />
              </div>

              <div className="input">
                  <p>Email:</p>
                  <input type="email" placeholder="" />
              </div>

              <div className="input">
                  <p>Phone Number:</p>
                  <input placeholder="" />
              </div>

              <div className="input">
                  <p>Number of table:</p>
                  <input type="number" min="1" max="5" placeholder="" />
              </div>

              <a href="#" className="order_btn rounded-lg">Request</a>

          </form>

      </div>

  </div>
  )
}

export default TableBooking