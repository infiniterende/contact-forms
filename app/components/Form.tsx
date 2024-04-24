import React, { useState } from "react";

const Form = () => {
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
    <form className="form place-content-center" onSubmit={handleSubmit}>
      <h1 className="contact-heading">Contact Form</h1>
      <div className="separator"></div>
      <input
        onChange={handleChange}
        type="text"
        name="firstname"
        placeholder="John"
        value={form.firstname}
      />
      <input
        type="text"
        name="lastname"
        placeholder="Doe"
        value={form.lastname}
      />
      <input
        type="text"
        name="email"
        placeholder="user@domain.com"
        value={form.email}
      />
      <input
        type="text"
        name="phone"
        placeholder="+1-999-999-9999"
        value={form.phone}
      />
      <textarea
        onChange={handleChange}
        name="message"
        placeholder="Your questions or commnets"
      ></textarea>
    </form>
  );
};

export default Form;
