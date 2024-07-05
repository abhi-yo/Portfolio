import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/f89ae282-f574-4b3c-b768-84499c65d6dc"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-secondary text-gray-300">
            Contact
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <input
            className="p-4 bg-[#ccd6f6] rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="p-4 bg-[#ccd6f6] rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] py-4 px-2 rounded-lg"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
        </div>
        <button className="text-white border-2 rounded-lg hover:bg-secondary hover:border-secondary px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
