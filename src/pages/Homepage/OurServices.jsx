import React from 'react'
import {Text,Img,Button} from "components"
import { useNavigate } from 'react-router-dom'

const OurServices = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-white-A700 flex flex-col md:gap-10 gap-[40px] items-center justify-center max-w-[1920px] md:px-10 sm:px-5  py-[100px] w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-center text-gray-900 w-auto"
            size="txtGaramond48Gray900"
          >
            Our Services
          </Text>
          <div className="flex flex-col font-poppins items-start justify-start max-w-[1440px] mx-auto w-full">
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 h-full items-center justify-center p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_housedesignpl.svg"
                  alt="housedesignpl"
                />
                <Text
                  className="text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  <>
                    architecture
                    <br />
                    design
                  </>
                </Text>
              </div>
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 items-center justify-start p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_television.svg"
                  alt="television"
                />
                <Text
                  className="text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  <>
                    mep
                    <br />
                    engineering
                  </>
                </Text>
              </div>
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 items-center justify-start p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_craneliftcons.svg"
                  alt="craneliftcons"
                />
                <Text
                  className="text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  <>
                    civil
                    <br />
                    engineering
                  </>
                </Text>
              </div>
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 items-center justify-start p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] md:h-auto object-cover w-[100px]"
                  src="images/img_maskgroup.png"
                  alt="maskgroup"
                />
                <Text
                  className="text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  <>
                    landscape
                    <br />
                    design
                  </>
                </Text>
              </div>
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 items-center justify-start p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_blueprintplant.svg"
                  alt="blueprintplant"
                />
                <Text
                  className="max-w-[250px] md:max-w-full text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  INTERIOR FITOUT WORKS
                </Text>
              </div>
              <div className="bg-gradient min-w-[200px] flex flex-1 flex-col gap-6 items-center justify-start p-[40px] md:px-10 sm:px-5 w-full">
                <Img
                  className="h-[100px] w-[100px]"
                  src="images/img_cogwheelsgearenginemachine.svg"
                  alt="cogwheelsgearen"
                />
                <Text
                  className="text-center text-gray-900 text-xl tracking-[1.20px] uppercase"
                  size="txtPoppinsMedium20"
                >
                  <>
                    construction
                    <br />
                    management
                  </>
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-poppins leading-[normal] min-w-[174px] text-center text-lg tracking-[0.18px] uppercase"
            shape="square"
            color="lime_900"
            size="sm"
            variant="outline"
            onClick={() => navigate("/services")}
          >
            learn more
          </Button>
        </div>
  )
}

export default OurServices
