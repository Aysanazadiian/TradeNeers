import { React, useRef } from "react";
import { FaPhoneAlt, FaFax, FaEnvelope, FaPhone } from "react-icons/fa";
function Contact(ref) {
  const name = useRef();
  const lastname = useRef();
  const phonenumber = useRef();
  const email = useRef();
  const regarding = useRef();
  const message = useRef();

  const send = () => {
    localStorage.setItem("Name", name.current.value);
    localStorage.setItem("LastName", lastname.current.value);
    localStorage.setItem("PhoneNumber", phonenumber.current.value);
    localStorage.setItem("Email", email.current.value);
    localStorage.setItem("Regarding", regarding.current.value);
    localStorage.setItem("Message", message.current.value);
  };

  return (
    <>
      <section className="bg-[#18395e]">
        <section className=" flex flex-col justify-center w-[70%] m-auto">
          <section className="flex md:flex-row flex-col py-12 items-center justify-start space-y-10 md:space-y-0 md:justify-between h-auto">
            <p className="flex flex-col justify-center space-y-5 md:text-start text-center">
              <span className=" text-[26px] openSans font-bold text-white ">
                Contact
              </span>
              <span className=" text-[16px] openSans text-white ">
                Feel free to use our contact form.We are happy to hear from
                them.
              </span>
              <span className=" text-[16px] openSans text-white ">
                Please note our applicable data protection regulations.
              </span>
            </p>
            <section>
              <section>
                <div className="flex flex-col justify-center items-center ">
                  <section className="relative group">
                    <svg width="80" height="80">
                      <circle cx="40" cy="40" r="30" fill="white" />
                    </svg>
                    <FaPhoneAlt className="absolute top-[35%] right-[35%] z-50 text-[26px] text-[#18395e] group-hover:text-[#007BC2]" />
                  </section>
                  <span className="font-bold text-[16px] openSans text-white pb-8 ">
                    0421 / 807 1834 0
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <section className="relative group">
                    <svg width="80" height="80">
                      <circle cx="40" cy="40" r="30" fill="white" />
                    </svg>
                    <FaFax className="absolute top-[35%] right-[35%] z-50 text-[26px] text-[#18395e] group-hover:text-[#007BC2]" />
                  </section>
                  <span className="font-bold text-[16px] openSans text-white ">
                    info@tradeneers.com
                  </span>
                </div>
              </section>
              <section></section>
            </section>
          </section>
          <section>
            <form className="flex flex-wrap justify-between text-white">
              <div className="flex50 inline-block py-[20px] md:pr-5 pr-0">
                <label htmlFor="firstname">first name</label>
                <input
                  name="firstname"
                  type="text"
                  ref={name}
                  className="w-[100%]
                     h-14 bg-transparent border-[1px] hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg "
                />
              </div>
              <div className="md:flex50 flex100  inline-block py-[20px] md:pl-5 pl-0">
                <label htmlFor="phonenumber" className="mb-2">
                  phone number
                </label>
                <input
                  ref={phonenumber}
                  name="phonenumber"
                  type="text"
                  className="w-[100%]
                     h-14 bg-transparent border-[1px] hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg "
                />
              </div>
              <div className="md:flex50 flex100 inline-block py-[20px] md:pr-5 pr-0">
                <label htmlFor="lastname">last name</label>
                <input
                  ref={lastname}
                  name="lastname"
                  type="text"
                  className="w-[100%] h-14 bg-transparent border-[1px] hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg"
                />
              </div>
              <div className="md:flex50 flex100 inline-block py-[20px] md:pl-5 pl-0">
                <label htmlFor="email">email address</label>
                <input
                  ref={email}
                  name="email"
                  type="email"
                  className="w-[100%]
                     h-14 bg-transparent border-[1px] hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg "
                />
              </div>
              <div className="flex100 inline-block py-[20px]">
                <label htmlFor="Regarding">Regarding</label>
                <input
                  ref={regarding}
                  name="Regarding"
                  type="text"
                  className="w-full overflow-hidden  h-14 bg-transparent border-[1px] hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg"
                />
              </div>
              <div className="flex100 inline-block py-[20px] ">
                <label htmlFor="message">message</label>
                <textarea
                  ref={message}
                  name="message"
                  cols="40"
                  rows="4"
                  className="w-full bg-transparent border-[1px] pt-3 hover:border-[#007BC2] outline-none focus:border-[#007BC2] px-3 transition-all duration-300 border-white rounded-lg  overflow-hidden"
                ></textarea>
              </div>
              <div className="container flex100 space-y-3 inline-block py-[20px]">
                <input type="checkbox" id="cbx" className="hidden" />
                <label for="cbx" className="check ">
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 18 18"
                    className="inline-block mr-2"
                  >
                    <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                  </svg>
                  By submitting the form you accept our privacy policy
                </label>
              </div>
              <div className=" space-y-3 my-[20px]  w-[95px] h-[43px] cursor-pointer bg-[#007BC2] hover:bg-gradient-to-b hover:from-[#007BC2] hover:to-[#18395e] text-center rounded-md leading-[43px] mb-10">
                <input
                  type="submit"
                  value="SEND"
                  className="cursor-pointer"
                  onClick={send}
                />
              </div>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
