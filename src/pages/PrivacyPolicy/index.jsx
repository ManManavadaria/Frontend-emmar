import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
// import Header from "components/Header";
import NavBar from "components/NavBar";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="flex flex-col font-garamond items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 h-[593px] relative w-full">
          <Img
            className="h-[593px] m-auto object-cover w-full"
            src="images/img_hero_1.webp"
            alt="hero"
          />
          <Text
            className="absolute bottom-[16%] left-[13%] md:text-5xl text-[80px] text-white-A700"
            size="txtGaramond80WhiteA700"
          >
            ​​Privacy Policy
          </Text>
            <NavBar />
        </div>
        <div className="bg-white-A700_01 flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-60 py-20 w-auto md:w-full">
          <div className="flex flex-col gap-12 items-start justify-start max-w-[1440px] mx-auto w-full">
            <Text
              className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
              size="txtPoppinsRegular18"
            >
              Thank you for visiting the EMAAR Construction and Real Estate
              website. This Privacy Policy outlines how we collect, use,
              disclose, and safeguard your personal information. By using our
              website, you consent to the practices described in this Privacy
              Policy.
            </Text>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                1. Information We Collect
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                We may collect various types of information, including:
              </Text>
              <List
                className="flex flex-col font-poppins gap-4 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    a. Personal Information
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
                    <Text
                      className="leading-[30.00px] text-gray-600 text-lg"
                      size="txtPoppinsRegular18"
                    >
                      <span className="text-gray-600 font-poppins text-left font-bold">
                        Contact Information:
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        <>
                          {" "}
                          Name, email address, phone number, and mailing
                          address.
                          <br />
                        </>
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-bold">
                        Demographic Information:
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        {" "}
                        Age, gender, and other relevant demographic details.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    b. Non-Personal Information
                  </Text>
                  <div className="flex flex-col items-start justify-start sm:px-5 px-6 w-full">
                    <Text
                      className="leading-[30.00px] text-gray-600 text-lg"
                      size="txtPoppinsBold18"
                    >
                      <span className="text-gray-600 font-poppins text-left font-bold">
                        Website Usage Data:{" "}
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        <>
                          Pages visited, time spent on the site, and other
                          analytics data.
                          <br />
                        </>
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-bold">
                        Device Information:{" "}
                      </span>
                      <span className="text-gray-600 font-poppins text-left font-normal">
                        IP address, browser type, and operating system.
                      </span>
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                2. How We Use Your Information
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                We use your information for the following purposes:
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
                <Text
                  className="leading-[30.00px] text-gray-600 text-lg"
                  size="txtPoppinsBold18"
                >
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Communication:
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      {" "}
                      To respond to your inquiries and provide relevant
                      information.
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Personalization:{" "}
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      To tailor our services and content to your preferences.
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Analytics:{" "}
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      To improve our website and enhance user experience.
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Marketing:{" "}
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    To send promotional materials and updates, with the option
                    to opt-out.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                3. Cookies and Similar Technologies
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                We use cookies and similar technologies to collect information
                about your browsing activities. You can manage your cookie
                preferences through your browser settings.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                4. Information Sharing
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                We do not sell or rent your personal information to third
                parties. We may share your information with:
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
                <Text
                  className="leading-[30.00px] text-gray-600 text-lg"
                  size="txtPoppinsBold18"
                >
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Service Providers:{" "}
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      Third-party vendors who assist in website functionality.
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Legal Compliance:{" "}
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    To comply with applicable laws, regulations, or legal
                    processes.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                5. Data Security
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                We employ security measures to protect your personal information
                from unauthorized access, disclosure, alteration, and
                destruction.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                6. Third-Party Links
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                Our website may contain links to third-party websites. We are
                not responsible for the privacy practices or content of these
                sites. Please review their privacy policies before providing any
                personal information.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                7. Your Choices
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                You have the right to:
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
                <Text
                  className="leading-[30.00px] text-gray-600 text-lg"
                  size="txtPoppinsBold18"
                >
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Access and Update:
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    <>
                      {" "}
                      Review and update your personal information.
                      <br />
                    </>
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-bold">
                    Opt-out:
                  </span>
                  <span className="text-gray-600 font-poppins text-left font-normal">
                    {" "}
                    Unsubscribe from marketing communications.
                  </span>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                <>8. Children&#39;s Privacy</>
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                Our website is not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                9. Changes to this Privacy Policy
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                We reserve the right to update this Privacy Policy to reflect
                changes in our practices. Please review the policy periodically
                for any updates.
              </Text>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                10. Contact Us
              </Text>
              <Text
                className="leading-[30.00px] text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                <span className="text-gray-600 font-poppins text-left font-normal">
                  If you have questions or concerns about this Privacy Policy,
                  please contact us at{" "}
                </span>
                <span className="text-lime-900 font-poppins text-left font-normal">
                  <>
                    info@emaar.so
                    <br />
                  </>
                </span>
                <span className="text-gray-600 font-poppins text-left font-normal">
                  <>
                    <br />
                    By using our website, you agree to the terms of this Privacy
                    Policy. We appreciate your trust in EMAAR Construction and
                    Real Estate.
                    <br />
                    EMAAR Construction and Real Estate
                    <br />
                    1st Floor, Office 101, Sultan Business Park, Mogadishu
                    Somalia
                    <br />
                    +252611110099‬
                    <br />
                    info@emaar.so
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-white-A700 flex font-poppins gap-2 items-center justify-center md:px-5 px-60 py-[69px] w-full" />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
