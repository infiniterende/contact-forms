"use client";

import "../globals.css";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
const SimpleFormPage = () => {
  const [form, setForm] = useState<any>({});

  const handleChange = (e: any) => {
    const [name, value] = e.target;
    setForm((prevState: any) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setForm(form);
  };

  return (
    <div className="container container1 flex  flex-col items-center justify-center h-full bg-blue-500 w-full">
      <nav className="bg-blue-900 p-4 w-full h-auto">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white"> Clickflo Widgets </h1>
          <div className="text-white font-bold"></div>

          {/* Navigation Links */}
          <ul className="flex justify-between ">
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-300"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-300"
              >
                Form
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-300"
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="bg-white rounded-full p-2">Sign Up</div>
        </div>
      </nav>

      <h1 className="text-white">
        Embed Custom <span className="text-blue-900"> Widgets </span> on Your
        Website <span className="text-blue-900">Effortlessly</span>
      </h1>
      <h2 className="text-white">
        Enhance Your Website's Functionality with{" "}
        <span className="text-blue-900">Clicflo Widgets</span>
      </h2>

      <div className="bg-white flex flex-col w-3/4 h-3/4  rounded-3xl m-5 items-center">
        <h1 className="text-center text-blue-800"> Contact Form </h1>
        <div className="bg-blue-800 h-px w-full"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Sidebar formType="type1" isClicked={true} />
          </div>

          <div className="col-span-2">
            <form
              className=" m-5 grid place-content-center"
              onSubmit={handleSubmit}
            >
              <h1>Get in touch </h1>
              <h3> Leave your message and we'll get back to you shortly </h3>
              <hr className="my-4 border-t border-gray-300" />
              <div className="flex gap-4">
                <div className="w-1/2 p-4">
                  <label>First Name*</label>
                  <input
                    className="shadow-lg border rounded p-2 mb-4 block w-full"
                    onChange={handleChange}
                    type="text"
                    name="firstname"
                    placeholder="John"
                    value={form.firstname}
                  />
                </div>
                <div className="w-1/2 p-4">
                  <label>Last Name*</label>
                  <input
                    className="shadow-lg border rounded p-2 mb-4 block w-full"
                    onChange={handleChange}
                    type="text"
                    name="lastname"
                    placeholder="Doe"
                    value={form.lastname}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-1/2 p-4 flex-col">
                  <label>Email*</label>
                  <input
                    className="shadow-lg mb-4 p-4 pr-36"
                    type="text"
                    name="email"
                    placeholder="user@domain.com"
                    value={form.email}
                  />
                </div>
                <div className="w-1/2 p-4 flex-col">
                  <label>Phone*</label>
                  <input
                    className=" shadow-lg mb-4 p-4 pr-36"
                    type="text"
                    name="phone"
                    placeholder="+1-999-999-9999"
                    value={form.phone}
                  />
                </div>
              </div>
              <label>Message*</label>
              <textarea
                className=" shadow-lg rows-100 border rounded pb-36 m-2 w-full"
                onChange={handleChange}
                name="message"
                placeholder="Your questions or comments"
              ></textarea>
              <div className="items-center flex flex-col">
                <h3>Attachments </h3>
                <p className="text-gray-500">
                  Allowed file types: jpg, jpeg, png, gif, txt, pdf, doc, docx,
                  xls, xlxs, odt, ppt, pptx, pps, ppsx, html, and less than 100
                  MB
                </p>

                <div className="flex justify-center border-dashed p-10 w-64 text-center">
                  <a className="text-blue-700 text-decoration: underline">
                    Choose file{" "}
                  </a>{" "}
                  or drop here
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleFormPage;
