import React, { useState } from "react";
import { RiProfileLine } from "react-icons/ri";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "../styles/global.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
        // sendEmail(formData);
  };

  return (
    <>
      <div className="p-4">
        <div className="border w-min flex items-center justify-centerm py-2 px-6 rounded-full text-xs border-[#999999] mb-16">
          <RiProfileLine />
          <h1 className="ml-2 w-max">CONTACT</h1>
        </div>
        <div>
          <h1 className="font-light text-4xl xl:text-[48px] mb-8">
            Let's Work <span className="color-yellow">Together!</span>
          </h1>
        </div>
        <div className="flex flex-col gap-y-6 font-light xl:text-[24px]">
          <h1>Projects.mahadwaseem@gmail.com</h1>
          <div>
            <form
              action="/api/sendEmail"
              className="flex flex-col gap-y-6 mt-4"
              onSubmit={handleSubmit}
            >
              <div className="xl:flex xl:items-center hidden">
                <div className="flex flex-col gap-4">
                  <label className="text-xs" htmlFor="nameTag">
                    FULL NAME *
                  </label>
                  <input
                    id="nameTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="emailTag">
                    EMAIL *
                  </label>
                  <input
                    id="emailTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Your Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
              </div>

              <div className="xl:hidden flex flex-col gap-y-6">
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="nameTag">
                    FULL NAME *
                  </label>
                  <input
                    id="nameTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="emailTag">
                    EMAIL *
                  </label>
                  <input
                    id="emailTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Your Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                  />
                </div>
              </div>

              <div className="xl:flex hidden">
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="phoneNumberTag">
                    PHONE (OPTIONAL)
                  </label>
                  <input
                    id="phoneNumberTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="subjectTag">
                    SUBJECT *
                  </label>
                  <input
                    id="subjectTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    name="subject"
                  />
                </div>
              </div>

              <div className="xl:hidden flex flex-col gap-y-6">
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="phoneNumberTag">
                    PHONE (OPTIONAL)
                  </label>
                  <input
                    id="phoneNumberTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs" htmlFor="subjectTag">
                    SUBJECT *
                  </label>
                  <input
                    id="subjectTag"
                    className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                    type="text"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    name="subject"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs" htmlFor="budgetTag">
                  YOUR BUDGET (OPTIONAL)
                </label>
                <input
                  id="budgetTag"
                  className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                  type="text"
                  placeholder="A range budget for your project"
                  value={formData.budget}
                  onChange={handleChange}
                  name="budget"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs" htmlFor="messageTag">
                  MESSAGE
                </label>
                <textarea
                  id="messageTag"
                  className="text-white text-[18px] py-1 border-none bg-transparent focus:caret-white"
                  placeholder="Write your message here ..."
                  value={formData.message}
                  onChange={handleChange}
                  name="message"
                />
              </div>
            </form>
          </div>

          <div className="">
            <input type="file" id="attachmentInput" className="hidden" />
            <label
              htmlFor="attachmentInput"
              className="pointer text-xs flex items-center justify-start gap-2"
            >
              <AiOutlineCloudUpload />
              ADD AN ATTACHMENT
            </label>
          </div>

          <button
            className="text-black bg-[#28E98C] py-3 px-10 w-[220px] rounded-full text-sm font-normal"
            onClick={handleSubmit}
          >
            SEND MESSAGE
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
