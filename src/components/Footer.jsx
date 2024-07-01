import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="container px-5 py-5 flex items-center sm:flex-row flex-col">
        <p className="text-xl text-center text-gray-600 border-l-2 p-2 border-gray-500  mt-4">Copyright © 2024 Foodee Restaurant—
          <a href="https://twitter.com/knyttneve" className="text-orange-600 ml-1 text-2xl" rel="noopener noreferrer" target="_blank">@Prasan Poudel</a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className=" text-3xl">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="ml-3 text-3xl">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="ml-3 text-3xl">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer