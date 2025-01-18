import React from 'react'
import { useEffect } from 'react';
const Error = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);
  return (
<div class="gradient text-black min-h-screen flex items-center justify-center">
  <div class="container mx-auto p-4 flex flex-wrap items-center">
    <div class="w-full md:w-7/12 text-center md:text-left p-4">
      <div class="text-6xl font-medium">404</div>
      <div class="text-xl md:text-3xl font-medium mb-4">
        Oops. This page has gone missing.
      </div>
      <div class="text-lg mb-8">
        You may have mistyped the address or the page may have moved.
      </div>
    </div>
  </div>
</div>
  )
}

export default Error