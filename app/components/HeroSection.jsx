import React from 'react'
import Image from 'next/image';


const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>

        {/* Image */}
        <div className='col-span-5'>
          <Image
            src="/images/hero-image.png"
            alt='Hero Image'
            width={500}
            height={500}
            />
        </div>

        {/* Information */}
        <div className='col-span-7 place-self-center p-3'>
            <h1 className="text-white mb-4 text-4xl  lg:text-6xl font-extrabold">Hi, I&apos;m Josh</h1> 
            <p className='text-[#ADB7BE] text-lg lg:text-xl'>
              Lorem ipsum dolor sit amet, consectetur adip eist elementum et dolor et. Lorem 
              ipsum dolor sit amet, consectetur adip eist
            </p>
        </div>

      </div>
    </section>
  )
};

export default HeroSection;