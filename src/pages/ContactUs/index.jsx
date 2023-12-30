import React, { useState } from "react";
import axios from "axios";
import * as Yup from "yup";

import { Button, Img, Text, TextArea, List, Input } from "components";
import Footer from "components/Footer";
import NavBar from "components/NavBar";
import ContactUsImage from "components/ContactUsImage";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // If validation passes, continue with form submission
      const response = await axios.post(process.env.API, formData);
      if (response.status == 200) {
        // Clear the form data
        document.getElementById("form1").reset();
      }
      setSuccessMessage("Form submitted successfully!");
    } catch (error) {
      if (error.name === "ValidationError") {
        // Yup validation error
        const yupErrors = {};
        error.inner.forEach((err) => {
          yupErrors[err.path] = err.message;
        });
        setFormErrors(yupErrors);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <>
      <div className="flex flex-col font-poppins items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-900 h-[593px] relative w-full">
          <Img
            className="h-[593px] m-auto object-cover w-screen"
            src="images/img_hero.png"
            alt="hero"
          />
          <div className="absolute bottom-[17%] flex flex-col gap-6 items-start justify-center left-[13%] w-auto">
            <a
              href="javascript:"
              className="text-white-A700 text-xl tracking-[1.20px] uppercase w-auto"
            >
              <Text size="txtPoppinsMedium20WhiteA700">CONTACT US</Text>
            </a>
            <Text
              className="md:text-5xl text-[80px] text-white-A700 w-auto"
              size="txtGaramond80WhiteA700"
            >
              Get in touch
            </Text>
          </div>
          <NavBar />
        </div>
        <div className="bg-white-A700_01 flex md:flex-col flex-row md:gap-10 gap-[122px] items-center justify-start p-20 md:px-10 sm:px-5 w-full">
          <Img
            className="md:flex-1 h-[732px] sm:h-auto ml-40 md:ml-[0] object-cover w-[35%] md:w-full"
            src="images/img_rectangle4.png"
            alt="rectangleFour"
          />
          <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-auto md:w-full">
            <Text
              className="leading-[32.00px] max-w-[699px] md:max-w-full text-gray-600 text-xl"
              size="txtPoppinsRegular20"
            >
              For inquiries, collaborations, or more information, feel free to
              reach out. We look forward to hearing from you!
            </Text>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <form onSubmit={handleSubmit} id="form1" className="w-full">
                <div className="flex flex-col gap-3 items-start justify-start max-w-[708px] w-full">
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtPoppinsRegular18Gray900"
                      >
                        First Name
                      </Text>
                      <input
                        id="firstName"
                        name="firstName"
                        placeholder=""
                        className={`p-0 w-full bg-gray-100 h-[50px] ${
                          formErrors.firstName && "border-red-500 h-[50px]"
                        }`}
                        wrapClassName="flex h-[60px] w-full"
                        onChange={handleInputChange}
                      />
                      {formErrors.firstName && (
                        <p className="text-red-500">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtPoppinsRegular18Gray900"
                      >
                        Last Name
                      </Text>
                      <input
                        name="lastName"
                        placeholder=""
                        className={`p-0 w-full bg-gray-100 h-[50px]${
                          formErrors.lastName && "border-red-500 h-[50px]"
                        }`}
                        wrapClassName="flex h-[60px] w-full"
                        onChange={handleInputChange}
                      />
                      {formErrors.lastName && (
                        <p className="text-red-500">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                    <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtPoppinsRegular18Gray900"
                      >
                        Email
                      </Text>
                      <input
                        name="email"
                        placeholder=""
                        className={`p-0 w-full bg-gray-100 h-[50px]${
                          formErrors.email && "border-red-500 h-[50px]"
                        }`}
                        wrapClassName="flex h-[60px] w-full"
                        onChange={handleInputChange}
                      />
                      {formErrors.email && (
                        <p className="text-red-500">{formErrors.email}</p>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col gap-3 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-lg w-full"
                        size="txtPoppinsRegular18Gray900"
                      >
                        Phone Number
                      </Text>
                      <input
                        name="phoneNumber"
                        placeholder=""
                        className={`p-0 w-full bg-gray-100 h-[50px]${
                          formErrors.phoneNumber && "border-red-500 h-[50px]"
                        }`}
                        wrapClassName="flex h-[60px] w-full"
                        onChange={handleInputChange}
                      />
                      {formErrors.phoneNumber && (
                        <p className="text-red-500">{formErrors.phoneNumber}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-lg w-full"
                      size="txtPoppinsRegular18Gray900"
                    >
                      Message
                    </Text>
                    <textarea
                      className={`bg-gray-100 border-0 w-full ${
                        formErrors.message && "border-red-500 h-[50px]"
                      }`}
                      name="message"
                      placeholder=""
                      onChange={handleInputChange}
                    />
                    {formErrors.message && (
                      <p className="text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                </div>
                <Button
                  type="submit"
                  className="cursor-pointer leading-[normal] min-w-[129px] text-center text-lg tracking-[0.18px] uppercase"
                  shape="square"
                  color="lime_900"
                  size="sm"
                  variant="fill"
                >
                  submit
                </Button>
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-row items-center justify-start max-w-[1920px] md:px-10 sm:px-5 px-[277px] py-[100px] w-full">
          <List
            // className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1440px] mx-auto w-full"
            className="sm:flex-col flex flex-row gap-5 justify-center flex-wrap max-w-[1440px] mx-auto w-full"
            orientation="horizontal"
          >
            <a href="mailto:info@emaar.so">
              <div className="bg-gray-900 md:h-[375px] h-[395px] w-[250px] relative sm:w-full flex">
                <div className="border border-lime-900 border-solid h-[375px] m-auto w-[95%]">
                  <div className="absolute flex flex-col gap-10 h-max inset-[0] items-center justify-start m-auto w-auto">
                    <Img
                      className="h-[60px] md:h-auto object-cover w-[60px]"
                      src="images/img_icon_60x60.png"
                      alt="icon"
                    />
                    <div className="flex flex-col gap-6 items-center justify-center w-auto sm:w-full">
                      <Text
                        className="md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700 w-full"
                        size="txtGaramond32"
                      >
                        Email Us
                      </Text>
                      <Text
                        className="text-center text-white-A700 text-xl w-auto"
                        size="txtPoppinsRegular20WhiteA700"
                      >
                        info@emaar.so
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a href="tel:252611110099" target="true">
              <ContactUsImage
                className="bg-gray-900 md:h-[375px] h-[395px] w-[250px] p-2.5 relative sm:w-full"
                iconimage="images/img_icon_7.png"
                locationtext="Call Us"
                addresstext="252611110099"
              />
            </a>  
            <a
              href="https://maps.app.goo.gl/6aoJb1m1Ycb7VgJD8"
              target="true"
            >
              <ContactUsImage className="bg-gray-900 md:h-[375px] h-[395px] w-[250px] p-2.5 relative sm:w-full" />
            </a>
          </List>
        </div>
        <Img
          className="h-[595px] sm:h-auto object-cover w-[1920px] md:w-full"
          src="images/img_section.png"
          alt="section"
        />
        <Footer className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-60 py-[69px] w-full" />
      </div>
    </>
  );
};

export default ContactUsPage;
