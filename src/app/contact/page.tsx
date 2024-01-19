// mobile phone Auth verification
"use client";
import React, { useState } from "react";
import { auth } from "../../service/firebase";
import "firebase/auth";
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
declare global {
  interface Window {
    FB: any;
  }
}

const ContactPage = () => {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [number, setNumber] = useState<any>();
  const [secondInput, setSecondInput] = useState<any>();
  const provider = new GoogleAuthProvider();

  const handlesendOtp = async (e: any) => {
    e.preventDefault();

    try {
      // const recaptchaVerifier =
      const Phone = "+923481425275";
      console.log("number ", number);

      // if (providers.length == 0) {
      const confirmation = await signInWithPhoneNumber(
        auth,
        "+923419492200",
        new RecaptchaVerifier(auth, "recaptcha-container", {})
        // recaptchaVerifier
      );
      console.log(confirmation);
      console.log("User signed in successfully!");
      // }
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            width={200}
            height={200}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Phone Auth
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            // onSubmit={onSignInSubmit}
          >
            {/* <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            {/* here is password  */}
            {/* <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* here is button of opt */}
            {/* {showButton && ( */}
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              style={{ color: "#fefeff" }}
              type="submit"
              onClick={handlesendOtp}
            >
              {" "}
              Send
            </button>
            <div id="recaptcha-container"></div>
            {/* )} */}

            {/* here is second opt number  */}
            {/* {showSecondInput && ( */}
            <div>
              <label
                htmlFor="optNumber"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                OPTCode
              </label>
              <div className="mt-2">
                <input
                  id="optNumber"
                  name="optNumber"
                  type="number"
                  value={secondInput}
                  // onChange={handleSecondInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* )} */}

            {/* end  */}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;

// const auth = getAuth();
//   try {
//   const recaptchaVerifier = new RecaptchaVerifier(
//     auth,
//     "recaptcha-container",
//     {}
//   );
//   const confirmation = await signInWithPhoneNumber(
//     auth,
//     number,
//     recaptchaVerifier
//   );
//   console.log(confirmation);
//   console.log("User signed in successfully!");

// } catch (err) {
//   console.log("err", err);

// }
