"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import {MdEmail} from 'react-icons/md'
import {RiLockPasswordFill} from 'react-icons/ri'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AuthError from "@/components/error/authError";
import Load from "@/components/loader/loading";


const schema = object({
    email: string()
      .required("Please enter your email adress.")
      .email("Invalid email adress !"),
    password: string()
      .required("Please enter your password.")
      .min(9, "Must be between 9 to 26 characters !")
      .max(26, "Must be betwen 9 to 26 characters !"),
  }).required();
  

const LoginForm = () => {
    const [error, setError] = useState({});

    const router = useRouter();
    const searchParams = useSearchParams();
    //const callbackUrl = searchParams.get("callbackUrl");

    const [isLoading, setIsLoading] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
    
    const onSubmit = async (data:any) => {
        const { email, password } = data;
        setIsLoading(true)
        try {
            const result = await signIn("credentials", {
            redirect: Boolean(false),
            email,
            password,
            callbackUrl: "/",
            });

            if (!result?.ok && result?.error === "CredentialsSignin"){
                setIsLoading(false);
                setError({ message: "Bad email or password !" });
            }
           

            if (result?.ok && result?.url) router.push(result?.url);
        } catch (error) {
            setError({ message: error.message });
            setIsLoading(false);
        }
    };


    return (
        <div>

            {isLoading && (
                <Load/> 
            )}

            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center px-12 py-4"
            >
                <div className='w-full  py-2 border-b border-x-redColor 
                flex items-center gap-2'>
                    <MdEmail className='text-xl text-black'/>
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
                            className='w-full h-full text-lg bg-transparent
                            outline-none border-none placeholder:text-gray-400
                            text-redColor'
                            label="Email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            error={errors.email ? Boolean(true) : Boolean(false)}
                        />
                        )}
                    />
                </div>

                <div className='mt-3 w-full py-2 border-b border-x-redColor 
                flex items-center gap-2'>
                    <RiLockPasswordFill className='text-xl text-black'/>
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
                            text-redColor"
                            label="Password"
                            placeholder="Enter your password"
                            error={errors.password ? Boolean(true) : Boolean(false)}
                        />
                        )}
                    />
                </div>
                {error?.message && <AuthError error={error} setError={setError} />}

                <div className='mt-6 flex items-center justify-center w-full'>
                    <Button
                        type="submit"
                        variant="outlined"
                        className={"w-auto border-none outline-none bg-redColor  px-12 py-2 rounded-lg text-white font-semibold cursor-pointer" + 
                        ( isLoading ? "bg-opacity-50":"")
                        }
                    >
                        Login
                    </Button>  
                </div>
                <div className='mt-6 text-base font-bold cursor-pointer'>New on Hackbook ?</div>
                <Link href="/registration">
                    <Button
                        type="button"   
                        variant="outlined"
                        className="mt-2 bg-gradient-to-br border-none from-red-200 to-redColor w-full 
                        md:w-auto px-4 py-2 cursor-pointer rounded-lg hover:shadow-lg transition-all ease-in-out 
                        duration-100 text-base text-white"
                    >
                        Create your Hackbook account
                    </Button> 
                </Link>
            </form>

        </div>

    );
}

export default LoginForm;