// HoverCardComponent.jsx
import React from "react";
import { Img, Text } from "components"; // Replace with your actual component imports

const cardData = [
  {
    id: 1,
    iconSrc: "images/img_icon.webp",
    heading: "Safety",
    text: "A solid safety record reflects quality management, supervision and workers. Our team constantly strives to improve accident prevention and awareness through training and extensive planning programs.",
  },
  {
    id: 2,
    iconSrc: "images/img_icon_80x80.webp",
    heading: "Integrity",
    text: "We value integrity in all our dealings. Our commitment to honesty, transparency, and ethical conduct forms the foundation of our relationships with clients, partners, and employees.",
  },
  {
    id: 3,
    iconSrc: "images/img_icon_1.webp",
    heading: "Community",
    text: "EMAAR Construction strives to provide a friendly employee work environment that encourages productivity and giving back to the communities that support our business and foster our families. Our employees exhibit strong team spirit and a sense of pride that is usually found only in small companies.",
  },
  {
    id: 4,
    iconSrc: "images/img_icon_2.webp",
    heading: "Quality",
    text: "EMAAR Construction takes pride in quality workmanship, quality people, and quality materials. Utilizing the latest technologies, our employees are able to do their work efficiently. EMAAR Construction maintains our own inventory of high-end equipment, enabling our team to control project speed, meet deadlines, and reduce costs.",
  },
  {
    id: 5,
    iconSrc: "images/img_icon_3.webp",
    heading: "Service",
    text: "We are dedicated to providing top-notch service to our clients. A solid safety record reflects quality management, supervision and workers. Our team constantly strives to improve accident prevention and awareness through training and extensive planning programs.",
  },
  {
    id: 6,
    iconSrc: "images/img_icon_4.webp",
    heading: "Communication",
    text: "Effective communication is a cornerstone of our success. We prioritize clear, open, and honest communication with clients, partners, and within our team. This ensures smooth project execution and client satisfaction.",
  },
  {
    id: 7,
    iconSrc: "images/img_icon_5.webp",
    heading: "Innovation",
    text: "EMAAR Construction is a problem solver. Our management team has over 25 years of experience in all types of construction. This experience enables us to deliver creative solutions to the most challenging construction projects. We take a forward-looking approach to technology and innovation in the construction industry.",
  },
];

const CoreValues = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center max-w-[1272px] mx-auto w-full my-10 sm:my-5 sm:mx-2">
        <Text
          className="text-5xl sm:text-[38px] md:text-[44px] text-gray-900 w-auto"
          size="txtGaramond48Gray900"
        >
          Core Values
        </Text>
        <Text
          className="leading-[32.00px] sm:text-[18px] max-w-[1272px] md:max-w-full text-center text-gray-600 text-xl"
          size="txtPoppinsRegular20"
        >
          <>
            EMAAR Construction is committed to excellence in everything we do.
            Our core values arefocused on workplace safety, integrity, community
            and environment, quality construction,outstanding customer service
            as well as innovation and creativity.
          </>
        </Text>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center m-10 sm:m-4">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="group bg-gray-100 m-8 relative flex flex-col md:flex-col  gap-6 h-[350px] md:m-2 md:h-[300px] md:w-[300px] items-center justify-center flex-wrap max-w-[700px] p-[40px] md:px-10 w-[30vw] sm:px-5 sm:w-[300px] sm:m-2 sm:h-[300px]"
          >
            <Img
              className="h-20 md:h-auto object-cover w-20"
              src={card.iconSrc}
              alt={card.heading}
            />
            <Text
              className="text-5xl sm:text-[38px] md:text-[38px] text-gray-900 w-auto m-auto"
              size="txtGaramond48Gray900"
            >
              {card.heading}
            </Text>
            <div className="absolute z-20 bg-gray-700 opacity-0 group-hover:opacity-100 duration-200 flex flex-1 flex-col gap-6 h-[300px] lg:h-full items-center justify-center max-w-[700px] p-[40px] md:px-5 sm:px-5 w-full">
              <Text
                className="text-white-A700 text-3xl sm:text-[38px] md:text-[40px] w-auto"
                size="txtGaramond48Gray900"
              >
                {card.heading}
              </Text>
              <p
                className="text-lm sm:text-[14px] text-center md:text-[14px] text-white-A700 w-auto"
                size="txtGaramond48Gray900"
              >
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoreValues;
