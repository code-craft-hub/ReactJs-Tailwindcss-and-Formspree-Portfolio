import React from "react";
import { contact } from "../data";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = () => {
  
  const [state, handleSubmit] = useForm("myyavlvp");
  if (state.succeeded) {
    return <p>Thanks for Contacting me. I will get back to you immediately!</p>;
  }
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-cneter text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-70 before:-left-40 before:hidden before:lg:block"></h2>
        </div>

        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* form */}
          <form className="space-y-8 w-full max-w-[780px]" onSubmit={handleSubmit}>
            <div className="flex gap-8">
              <input className="input" type="text" id="name" name="name" placeholder="Your Name" required/>
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <input className="input" id="email" name="email" type="email" placeholder="Your Email" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            {/* <input className="input" type="text" placeholder="Subject" /> */}
            <textarea
              className="textarea"  name="message" id="message" 
              type="text"
              placeholder="Your message" required
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            <button disabled={state.submitting} type="submit" className="btn btn-lg bg-accent hover:bg-accent-hover">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

 

