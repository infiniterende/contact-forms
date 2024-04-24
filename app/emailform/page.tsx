"use client";

import "../globals.css";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const EmailFormPage = () => {
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
    <div className="container container1 flex  flex-col items-center justify-center h-full bg-blue-200 w-full">
      <nav className="bg-blue-900 p-4 w-full h-auto">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white"> Clickflo Widgets </h1>
          <div className="text-white font-bold"></div>

          {/* Navigation Links */}
          <ul className="flex justify-between ">
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-200"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-200"
              >
                Form
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-200"
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

      <div className="bg-white flex flex-col w-3/4 h-3/4  rounded-3xl m-5 items-between">
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
              <div className="flex gap-4">
                <label>Name * </label>
                <input
                  className="shadow-lg border bg-gray-200 rounded p-2 mb-4 block w-full"
                  onChange={handleChange}
                  type="text"
                  name="firstname"
                  placeholder="John"
                  value={form.firstname}
                />
              </div>

              <label>Email*</label>
              <input
                className="rounded-lg bg-gray-200 shadow-lg mb-4 p-4 pr-36"
                type="text"
                name="email"
                placeholder="user@domain.com"
                value={form.email}
              />

              <label>Subject</label>
              <input
                className=" rounded-lg bg-gray-200 shadow-lg mb-4 p-4 pr-36"
                type="text"
                name="phone"
                placeholder="+1-999-999-9999"
                value={form.phone}
              />
              <label>Message*</label>
              <textarea
                className="rounded-lg shadow-lg bg-gray-200 rows-100 border rounded pb-36 m-2 w-full"
                onChange={handleChange}
                name="message"
                placeholder="Your questions or comments"
              ></textarea>

              <div className="flex justify-center">
                <button className="bg-red-800 rounded-lg text-white p-2 w-16">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailFormPage;
