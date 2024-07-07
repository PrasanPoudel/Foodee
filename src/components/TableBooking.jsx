import React from 'react'
import { CiMail } from "react-icons/ci";
const TableBooking = () => {
  return (
    <div className="TableBooking" id="TableBooking">
      <h1 className="title">Table<span>Booking</span></h1>

      <div className="TableBooking_main">

          <div className="TableBooking_image">
              <img src="/image/TableBooking_image.webp"/>
          </div>

          <form action="#">
              <div className="input">
                  <input type="text" placeholder="Name:" />
              </div>

              <div className="input">
                  <input type="email" placeholder="Email:" />
              </div>

              <div className="input">
                  <input placeholder="Phone Number:" />
              </div>

              <div className="input">
                  <input type="number" min="1" max="5" placeholder="Number of table:" />
              </div>

              <a href="#" className="TableBooking_btn rounded-lg">Request <CiMail /></a>

          </form>

      </div>

  </div>
  )
}

export default TableBooking