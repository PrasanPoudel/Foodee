import React from 'react'

const Footer = () => {
  return (
    <footer class="mt-5">
      <div class="container px-5 py-5 flex items-center sm:flex-row flex-col">
        <p class="text-xl text-center text-gray-600 border-l-2 p-2 border-gray-500  mt-4">Copyright © 2024 Foodee Restaurant—
          <a href="https://twitter.com/knyttneve" class="text-orange-600 ml-1 text-2xl" rel="noopener noreferrer" target="_blank">@Prasan Poudel</a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a class=" text-3xl">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a class="ml-3 text-3xl">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a class="ml-3 text-3xl">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer