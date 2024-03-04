import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { publicUrls } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // public key: 04unMmx332w3ItVL3
    // template ID: template_21a02ln
    // gmail service ID: service_me64jak


    emailjs.send('service_me64jak', 'template_21a02ln', { from_name: form.name, to_name: "Edward", from_email: form.email, to_email: 'edwardthomas7770@gmail.com', message: form.message }, '04unMmx332w3ItVL3')
      .then(() => {
        setLoading(false);
        alert("Thank you! I will get back to you as soon as possbile.");

        setForm({
          name: '',
          email: '',
          message: ''
        })
      }, (error) => {
        setLoading(false);
        console.log(error);
        alert("Something went wrong.")
      })
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        {/* <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
          {Object.keys(publicUrls.socialProfiles).map((socialProfile) => {
            const profile = publicUrls.socialProfiles[socialProfile];
            return (
              <div
                key={`social_${profile.title}`}
                onClick={() => window.open(profile.link, "_blank")}
                className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
              >
                <img
                  src={profile.icon}
                  alt={`social_${profile.title}`}
                  className="w-4/6 h-4/6 object-contain"
                />
              </div>
            );
          })}
        </div> */}
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
