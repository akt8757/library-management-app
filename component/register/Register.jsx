"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { BookOpen } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default function Register() {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitForm = async (value) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: value.email,
      password: value.password,
    });
    setLoading(false);

    if (error) console.log("Signup error:", error);
    else console.log("Signup success:", data);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:bg-white rounded-2xl md:shadow-lg py-15 w-full max-w-lg px-10">
          <div className="w-full flex items-center justify-center">
            <div className="flex gap-2 items-center">
              <BookOpen className="w-15 h-15 text-[#49BBBD]" />
              <h3 className="text-2xl font-bold text-[#49BBBD]">BookNest</h3>
            </div>
          </div>
          <h2 className="text-2xl mt-12 text-[#141416] font-normal mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(submitForm)} className="space-y-4">
            <div className="flex flex-col gap-4 ">
              {/* email */}
              <div>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                      message: "Only Gmail allowed",
                    },
                  })}
                  placeholder="Enter your email"
                  className={` ${
                    errors.email
                      ? "border-red-300 focus:border-red-300"
                      : "border-[#E6E8EC] focus:border-brandColor"
                  } w-full px-4 text-sm border py-3  focus:outline-none   rounded-full  text-[#777E90]`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400">{errors.email.message}</p>
                )}
              </div>

              {/* password */}
              <div>
                <div className="relative">
                  <input
                    type={showPassword ? "password" : "text"}
                    {...register("password", {
                      required: "Password required",
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/,
                        message:
                          "Password must contain 6 characters, 1 uppercase, 1 number and 1 special character",
                      },
                    })}
                    placeholder="Password"
                    className={` ${
                      errors.password
                        ? "border-red-300 focus:border-red-300"
                        : "border-[#E6E8EC] focus:border-brandColor"
                    } w-full px-4 text-sm border py-3  focus:outline-none   rounded-full  text-[#777E90]`}
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  >
                    {/* Eye icon can be added here */}
                    {showPassword ? (
                      <IoMdEye size={25} />
                    ) : (
                      <IoIosEyeOff size={25} />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="terms"
                onCheckedChange={(e) => setIsChecked(e)}
                className="
                flex items-center justify-center cursor-pointer
                  h-5 w-5
                  data-[state=checked]:bg-[#49BBBD] 
                  data-[state=checked]:border-[#49BBBD] 
                  data-[state=checked]:text-white
                  data-[state=checked]:items-center
                  border-[#B1B5C3]
                  "
              />
              <span className="font-medium text-sm text-[#141416] ">
                Sign up to accept our
                <Link href="/terms-and-condition" className="text-[#49BBBD]">
                  {" "}
                  terms & conditions.
                </Link>
              </span>
            </div>
            <Button
              isLoading={loading}
              disabled={!isChecked}
              type="submit"
              className="w-full bg-[#49BBBD] text-white font-bold font-dm text-base py-6 mt-5 rounded-full transition"
            >
              Create Account
            </Button>
          </form>
          <div className="text-center mt-6 text-gray-500 text-xs font-normal gap-1 flex items-center justify-center">
            Already have an account?
            <button
              type="button"
              onClick={() => {
                router.push("/login");
              }}
              className="text-brandColor font-semibold hover:underline text-xs cursor-pointer"
            >
              Login
            </button>
          </div>
          {error && (
            <p className="text-xs text-red-400 mt-2 font-normal text-center">
              {error}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
