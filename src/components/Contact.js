import React from "react";
import ContactIcons from "./ContactIcons";

const Contact = () => {
  return (
    <section className="bg-lux-brown px-64 py-24" id="contact">
      <div className="w-full">
        <h2 className="text-[4.5rem] text-white font-heading font-bold tracking-tight">
          contact.
        </h2>
        <p className="font-proxima text-white text-[0.9rem] tracking-wide leading-7">
          I am currently looking for any graduate roles related to technology, including: Web Development,
          Software Engineering, Data Analyst, etc. If you want to discuss further, feel free to contact me by any means.
        </p>
        <section>
          <form className="flex flex-col px-6 py-4 text-white font-proxima" action="">
            <h2 className="text-[2.5rem] pb-4 text-white font-bold">send a message.</h2>
            <h2 className="uppercase flex items-center gap-6 text-[1.15rem] text-white font-heading">
              Name
              <hr className="flex-grow opacity-50 border-t-2 border-white"></hr>
            </h2>
            <input type="text" className="rounded-md px-4 py-2  my-4 bg-white text-dark text-[0.9rem] focus:outline-none placeholder:text-lux-brown" placeholder="John Doe" />
            <h2 className="uppercase flex items-center gap-6 text-[1.15rem] text-white font-proxima">
              Email
              <hr className="flex-grow opacity-50 border-t-2 border-white"></hr>
            </h2>
            <input type="email" className="rounded-md px-4 py-2  my-4 bg-white text-dark text-[0.9rem] focus:outline-none placeholder:text-lux-brown" placeholder="john.doe123@gmail.com" />
            <h2 className="uppercase flex items-center gap-6 text-[1.15rem] text-white font-proxima">
              Message
              <hr className="flex-grow opacity-50 border-t-2 border-white"></hr>
            </h2>
            <textarea class="rounded-md px-4 py-2  my-4 bg-white text-dark text-[0.9rem] focus:outline-none placeholder:text-lux-brown" rows='5' placeholder="Enter your message here..."></textarea>
            <input type="submit" value="Send" className="rounded-md px-4 py-2  my-4 bg-white text-lux-brown font-bold text-[1rem] focus:outline-none uppercase cursor-pointer hover:bg-dark duration-500 hover:text-lux-cream active-border-none active:translate-y-10" />
          </form>
        </section>
        <section className="flex justify-center">
          <ContactIcons />
        </section>
      </div>
    </section>
  );
};

export default Contact;