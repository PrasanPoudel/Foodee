import React from 'react'

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

              <a href="#" className="TableBooking_btn rounded-lg bTableBooking-2 hover:bTableBooking-black">Request</a>

          </form>

      </div>

  </div>
  )
}

export default TableBooking