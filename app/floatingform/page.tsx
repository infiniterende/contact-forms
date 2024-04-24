"use client";

import "../globals.css";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
const FloatingFormPage = () => {
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
      <Navbar />

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
            <Sidebar formType="type2" isClicked={true} />
          </div>
          <div className="col-span-1 bg-gray-500 h-full"></div>

          <div className="col-span-1">
            <form
              className=" m-5 grid place-content-center"
              onSubmit={handleSubmit}
            >
              <h3>What's Your Name? *</h3>
              <input
                type="text"
                className="border-none border-b"
                name="fullName"
                value={form.fullName}
                placeholder="John Doe"
                onChange={handleChange}
              />

              <h3>What's Your Email? * </h3>
              <input
                type="text"
                className="border-none"
                name="email"
                value={form.email}
                placeholder="example@domain.com"
                onChange={handleChange}
              />

              <h3>How can we help you? * </h3>
              <input
                type="text"
                className="border-none"
                name="help"
                value={form.help}
                placeholder="Your questions or comments"
                onChange={handleChange}
              />

              <button className="m-4 bg-blue-600 pl-2 pr-2 ">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingFormPage;
