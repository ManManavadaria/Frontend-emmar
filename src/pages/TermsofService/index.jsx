import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
const TermsofServicePage = () => {
  return (
    <>
      <div className="flex flex-col font-garamond items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 h-[593px] relative w-full">
          <Img
            className="h-[593px] m-auto object-cover w-full"
            src="images/img_hero_593x1920.png"
            alt="hero"
          />
          <Text
            className="absolute bottom-[18%] left-[12%] md:text-5xl text-[80px] text-white-A700"
            size="txtGaramond80WhiteA700"
          >
            Terms of Service
          </Text>
            <NavBar />
        </div>
        <div className="bg-white-A700_01 flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-60 py-20 w-auto md:w-full">
          <div className="flex flex-col gap-12 items-start justify-start max-w-[1440px] mx-auto w-full">
            <Text
              className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
              size="txtPoppinsRegular18"
            >
              Welcome to the EMAAR Construction and Real Estate website. By
              accessing or using our website, you agree to comply with and be
              bound by the following Terms of Service. Please read these terms
              carefully before using our site.
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                1. Acceptance of Terms
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                By using our website, you agree to these Terms of Service and
                any additional terms and conditions referenced herein. If you do
                not agree to these terms, please refrain from using our site.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                2. Use of the Website
              </Text>
              <Text
                className="text-gray-600 text-lg w-auto"
                size="txtPoppinsRegular18"
              >
                You agree to use our website for lawful purposes and in a manner
                consistent with all applicable laws and regulations. You further
                agree not to:
              </Text>
              <div className="flex flex-col font-poppins items-start justify-start sm:px-5 px-6 w-full">
                <Text
                  className="leading-[30.00px] text-gray-600 text-lg"
                  size="txtPoppinsRegular18"
                >
                  <>
                    Violate or attempt to violate the security of the website.
                    <br />
                    Use the website in any manner that could disable,
                    overburden, damage, or impair its operation.
                    <br />
                    Use any automated means to access or collect information
                    from our website.
                  </>
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                3. Intellectual Property
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                The content, design, and functionality of our website are the
                exclusive property of EMAAR Construction and Real Estate and are
                protected by copyright, trademark, and other intellectual
                property laws.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                4. User Contributions
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                If you submit any content to our website, you grant us a
                non-exclusive, worldwide, royalty-free, irrevocable,
                transferable right to use, reproduce, modify, adapt, publish,
                translate, and distribute such content.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                5. Links to Third-Party Websites
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                Our website may contain links to third-party websites. We are
                not responsible for the content or practices of these sites.
                Your interactions with these linked sites are governed by their
                respective terms and policies.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                6. Disclaimer of Warranties
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                <>
                  Our website is provided &quot;as is&quot; and &quot;as
                  available&quot; without any warranties, express or implied. We
                  do not warrant that our website will be uninterrupted or
                  error-free, that defects will be corrected, or that the site
                  is free of viruses or other harmful components.
                </>
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                7. Limitation of Liability
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                EMAAR Construction and Real Estate shall not be liable for any
                direct, indirect, incidental, consequential, or punitive damages
                arising out of your use of or inability to use our website.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                8. Governing Law
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                These Terms of Service are governed by and construed in
                accordance with the laws of [Your Jurisdiction]. Any disputes
                arising under or in connection with these terms shall be subject
                to the exclusive jurisdiction of the courts located in [Your
                Jurisdiction].
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
                size="txtGaramond24"
              >
                9. Changes to Terms
              </Text>
              <Text
                className="leading-[30.00px] max-w-[1440px] md:max-w-full text-gray-600 text-lg"
                size="txtPoppinsRegular18"
              >
                We reserve the right to modify or update these Terms of Service
                at any time. Changes will be effective upon posting to the
                website. It is your responsibility to review these terms
                periodically for updates.
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
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
                  If you have any questions or concerns about these Terms of
                  Service, please contact us at
                </span>
                <span className="text-lime-900 font-poppins text-left font-normal">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-lime-900 font-poppins text-left font-normal underline"
                >
                  info@emaar.so
                </a>
                <span className="text-lime-900 font-poppins text-left font-normal">
                  {" "}
                </span>
                <span className="text-gray-600 font-poppins text-left font-normal">
                  <>
                    .<br />
                    Thank you for using the EMAAR Construction and Real Estate
                    website. We appreciate your compliance with these terms.
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

export default TermsofServicePage;
