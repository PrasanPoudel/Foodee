import React from 'react'

const Gallery = () => {
  return (
    <div className="w-full" id="Gallery">
      <h1 className="title">Our<span>Gallery</span></h1>

      <div>
        <div className="px-5 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap lg:w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="Gallery" className="w-full object-cover h-full object-center block" src="/image/gallery_1.webp"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="Gallery" className="w-full object-cover h-full object-center block" src="/image/gallery_2.webp"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="Gallery" className="w-full h-full object-cover object-center block" src="/image/gallery_3.webp"/>
              </div>
            </div>
            <div className="flex flex-wrap lg:w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="Gallery" className="w-full h-full object-cover object-center block" src="/image/gallery_4.webp"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="Gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="Gallery" className="w-full object-cover h-full object-center block" src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=600"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
  )
}

export default Gallery