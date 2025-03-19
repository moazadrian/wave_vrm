import React from 'react'


const Hero = () => {


  return (
    <>
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/thelodgebcnc.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>

      {/* Hero Content (Bottom Aligned) */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Wave VRM</h1>
        <h4 className="text-lg md:text-2xl mt-4">Experience the best we have to offer</h4>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-[#0e5d70] hover:bg-[#179cbc] rounded-lg font-medium">Our Listings</button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-[#7e7e7e] rounded-lg font-medium">3D Tour</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero