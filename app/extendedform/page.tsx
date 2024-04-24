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
    <div className="container container1 flex  flex-col items-center justify-center h-full bg-blue-100 w-full">
      <nav className="bg-blue-900 p-4 w-full h-auto">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white"> Clickflo Widgets </h1>
          <div className="text-white font-bold"></div>

          {/* Navigation Links */}
          <ul className="flex justify-between ">
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-100"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-100"
              >
                Widgets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-100"
              >
                Form
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-6 font-bold text-white hover:text-gray-100"
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
      4
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
                <label>Full Name </label>
                <input
                  className="shadow-lg border bg-gray-100 rounded p-2 mb-4 w-full"
                  onChange={handleChange}
                  type="text"
                  name="firstname"
                  placeholder="First Name * "
                  value={form.firstname}
                />
                <input
                  className="shadow-lg border bg-gray-100 rounded p-2 mb-4 w-full"
                  onChange={handleChange}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={form.lastname}
                />
              </div>
              <label>Address</label>
              <input
                className="rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-6"
                type="text"
                name="address"
                placeholder="Street Address"
                value={form.email}
              />
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-1">
                  <input
                    className="rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-6"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={form.city}
                  />
                </div>

                <div className="col-span-1">
                  <input
                    className="rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-6"
                    type="text"
                    name="state"
                    placeholder="State"
                    value={form.state}
                  />
                </div>
                <div className="col-span-1">
                  <input
                    className="rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-6"
                    type="text"
                    name="zipcode"
                    placeholder="Zipcode"
                    value={form.zipcode}
                  />
                </div>
              </div>
              <label>Contact Information</label>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <input
                    className=" rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-36"
                    type="text"
                    name="email"
                    placeholder="Email *"
                    value={form.email}
                  />
                </div>
                <div className="col-span-1">
                  <input
                    className=" rounded-lg bg-gray-100 shadow-lg mb-4 p-4 pr-36"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                  />
                </div>
              </div>
              <label>Questions / Comments </label>
              <textarea
                className="rounded-lg shadow-lg bg-gray-100 rows-100 border rounded pb-36 m-2 w-full"
                onChange={handleChange}
                name="message"
                placeholder="Message * "
              ></textarea>
              <div className=" w-full flex flex-row justify-center">
                <input type="checkbox" />
                <p>Update me on deals and special offers via email.</p>
              </div>
              <div className="flex justify-center">
                <button className="bg-black w-24 text-white p-4 item-center">
                  Submit
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
