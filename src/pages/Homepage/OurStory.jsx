import React from 'react'
import { Text,Img } from 'components'

const OurStory = () => {
  return (
    <>
    <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-start justify-start pr-4 pt-4 w-full bg-[url('../images/img_emaarlogo011.webp')] bg-contain bg-no-repeat py-[50px]">
          <div className="flex font-garamond md:px-5 relative w-[40%] sm:w-full md:w-full">
            <Text
              className="m-auto mt-[30px]  sm:px-[10px] md:text-5xl text-[80px] items-center text-gray-900 z-[1]"
              size="txtGaramond80"
              >
              Our Story
            </Text>
          </div>
          <Text
            className="leading-[32.00px] sm:leading-[22.00px] sm:text-[16px] sm:mx-2 text-justify mx-10 mb-4 text-gray-600 text-xl justify-center lg:w-[60%] lg:py-[50px]"
            size="txtPoppinsRegular20"
            >
            <>
              Welcome to EMAAR Construction and Real Estate, a dynamic design
              and build company that has been shaping the skyline of Somalia for
              the past three years. Established by a team of Innovative
              Founders, our company is driven by a passion for excellence in
              construction and a commitment to transforming visionary ideas into
              reality. 
              <br />
              <br />
              Since our inception, we have successfully completed approximately
              100 projects, each a testament to our unwavering dedication to
              quality craftsmanship and client satisfaction. At EMAAR, we
              believe in the power of collaboration and synergy, bringing
              together a team of passionate professionals who share a common
              goal: to create spaces that inspire and endure. Whether it&#39;s
              residential, commercial, or mixed-use developments, we approach
              each project with a blend of creativity, technical expertise, and
              a commitment to sustainable practices.
              <br />
              <br />
              As we continue to shape the skyline of Somalia, EMAAR Construction
              and Real Estate remains steadfast in its pursuit of excellence.
              Our success is not just measured in the structures we build but in
              the relationships we cultivate and the communities we contribute
              to. Join us on this journey, where every project is a canvas, and
              every detail is a brushstroke in the masterpiece of EMAAR.
            </>
          </Text>
        </div>
              </>
  )
}

export default OurStory
