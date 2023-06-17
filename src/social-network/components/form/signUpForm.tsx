"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import validator from "validator";
import { object, ref, string } from "yup";

import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FaMapMarker, FaUser, FaUserSecret } from "react-icons/fa";
import { MdDescription, MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import AuthError from "@/components/error/authError";
import Load from "@/components/loader/loading";

const schema = object({
  name: string()
    .required("Please enter your name.")
    .min(3, "Must be between 3 to 16 characters.")
    .max(16, "Must be between 3 to 16 characters.")
    .trim(),
  pseudo: string()
    .required("Please enter your pseudo.")
    .min(3, "Must be between 3 to 16 characters.")
    .max(16, "Must be between 3 to 16 characters.")
    .trim(),
  location: string()
    .required("Please enter your location.")
    .min(1, "Must be between 1 to 16 characters.")
    .max(16, "Must be between 3 to 16 characters.")
    .trim(),
  description: string()
    .required("Please enter your description.")
    .min(1, "Must be between 1 to 200 characters.")
    .max(200, "Must be between 1 to 200 characters.")
    .trim(),
  email: string()
    .required("Please enter your email.")
    .email("Email is invalid.")
    .trim(),
  password: string()
    .required("Please enter your password.")
    .min(9, "Must be between 9 to 16 characters.")
    .max(16, "Must be between 9 to 16 characters.")
    .trim(),
  confirmPassword: string()
    .required("Please re enter your password.")
    .oneOf([ref("password"), null], "Passwords don't match !"),
}).required();

const SignUpForm = () => {
  const [error, setError] = useState({});

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [conditionIsCheck, setConditionIsCheck] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const {
      name,
      pseudo,
      description,
      location,
      email,
      password,
      confirmPassword,
    } = data;
    setIsLoading(true);

    // Use validator to avoid XSS attacks.
    const safeData = {
      name: validator.escape(name),
      pseudo: validator.escape(pseudo),
      description: validator.escape(description),
      location: validator.escape(location),
      email: validator.escape(email),
      password: validator.escape(password),
      confirmPassword: validator.escape(confirmPassword),
    };

    // Create an user account.
    fetch("/api/signUp", {
      body: JSON.stringify(safeData),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setError({ message: res.error });
          setIsLoading(false);
          return null;
        }

        // Redirect to `/signin` if ok.
        router.push("/login");
      });
  };

  return (
    <div>
      {isLoading && <Load />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center px-12 py-4"
      >
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <FaUser className="text-xl text-black" />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="name"
                type="text"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Name"
                placeholder="Enter your name"
                helperText={errors.name ? errors.name?.message : ""}
                error={errors.name ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <FaUserSecret className="text-xl text-black" />
          <Controller
            name="pseudo"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="pseudo"
                type="text"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Pseudo"
                placeholder="Enter your pseudo"
                helperText={errors.name ? errors.name?.message : ""}
                error={errors.name ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <MdDescription className="text-xl text-black" />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="decription"
                type="text"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Description"
                placeholder="Enter your description"
                helperText={errors.name ? errors.name?.message : ""}
                error={errors.name ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor
                    flex items-center gap-2"
        >
          <FaMapMarker className="text-xl text-black" />
          <Controller
            name="location"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="location"
                type="text"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                                outline-none border-none placeholder:text-gray-400
                                text-textColor"
                label="Location"
                placeholder="Enter your location"
                helperText={errors.name ? errors.name?.message : ""}
                error={errors.name ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <MdEmail className="text-xl text-black" />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="email"
                type="email"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Email"
                placeholder="Enter your email"
                helperText={errors.email ? errors.email?.message : ""}
                autoComplete="off"
                error={errors.email ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <RiLockPasswordFill className="text-xl text-black" />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="password"
                type="password"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Password"
                placeholder="Enter your password"
                helperText={errors.password ? errors.password?.message : ""}
                error={errors.password ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        <div
          className="w-full py-2 border-b border-x-redColor 
                flex items-center gap-2"
        >
          <RiLockPasswordFill className="text-xl text-black" />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                id="confirmPassword"
                type="password"
                variant="standard"
                className="w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-textColor"
                label="Confirm password"
                placeholder="Enter again your password"
                helperText={
                  errors.confirmPassword ? errors.confirmPassword?.message : ""
                }
                error={errors.confirmPassword ? Boolean(true) : Boolean(false)}
              />
            )}
          />
        </div>
        {error?.message && <AuthError error={error} setError={setError} />}

        <div className="mt-4 flex gap-2 justify-center items-center">
          <label
            htmlFor="check-box-info"
            className="w-auto 
                        border-none outline-none bg-redColor px-12 py-2 rounded-lg 
                        text-white font-semibold cursor-pointer"
          >
            Register
          </label>
        </div>
        <input type="checkbox" id="check-box-info" className="modal-toggle" />
        <label htmlFor="check-box-info" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <label
              htmlFor="check-box-info"
              className="btn btn-xs btn-circle border-none absolute right-2 top-2 bg-redColor"
            >
              <XMarkIcon className="w-4" />
            </label>
            <h3 className="text-lg font-bold">Terms and conditions of use</h3>
            <p className="py-4">
              <span className="font-semibold">
                WHAT IS STRICTLY FORBIDDEN:{" "}
              </span>
              it is strictly forbidden to make DoS or DDoS attacks on this
              website under penalty of severe punishment.
              <br />
              it is strictly forbidden to try to bruteforce any login pages of
              the challenge
              <br />
              <br />
              <span className="font-semibold">WARNING: </span> do not use your
              real email and password because this site is vulnerable!
              <br />
              The information you enter can be read and used by anyone.
              <br />
              <br />
              <span className="font-semibold">DISCLAIMER: </span> For some parts
              of the challenge you will be redirected to some external websites.
              We are not responsible for the content of these websites. The
              ownership of an account on these websites is not the
              responsibility of the challenge. There is always a possibility to
              validate a step without creating an account on these websites.
              <br />
              The information you enter can be read and used by anyone.
              <br />
              <br />
            </p>
            <div className="flex mt-4 items-center justify-center w-full">
              <Button
                type="submit"
                variant="outlined"
                className="w-auto 
                        border-none outline-none bg-redColor px-12 py-2 rounded-lg 
                        text-white font-semibold cursor-pointer"
              >
                <label htmlFor="check-box-info">
                  I agree with the terms of use
                </label>
              </Button>
            </div>
          </label>
        </label>

        <div className="mt-6 text-base font-bold">
          Already registered on Hackbook ?
        </div>
        <Button
          type="button"
          variant="outlined"
          color="warning"
          className="mt-2 bg-gradient-to-br border-none  from-red-200 to-redColor w-full 
                    md:w-auto px-4 py-2 cursor-pointer rounded-lg hover:shadow-lg transition-all ease-in-out 
                    duration-100 text-base text-white"
        >
          <Link href="/login">Go to sign-in</Link>
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
