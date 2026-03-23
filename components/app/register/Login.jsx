"use client";
import { Button } from "@/components/ui/button";
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
import { Spinner } from "@/components/ui/spinner";
import { FcGoogle } from "react-icons/fc";

export default function Login({ signInPopup, closeSignUp }) {
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitForm = async (value) => {
    const email = value.email;
    const password = value.password;
    setLoading(true);
    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (!data.user) {
      setError("user not register");
    } else {
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:bg-white rounded-2xl md:shadow-lg py-15 w-full max-w-lg px-10">
          <Button
            type="button"
            isLoading={loading}
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 py-6 rounded-full bg-white text-[#23262F] font-bold font-dm text-base hover:bg-gray-50 transition"
          >
            <FcGoogle size={20} />
            <span>Login with Google</span>
          </Button>
          <h2 className="text-2xl mt-12 text-[#141416] font-normal mb-6">
            Sign in
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
            <Button
              disabled={loading}
              type="submit"
              className="w-full cursor-pointer bg-[#49BBBD] text-white font-bold font-dm text-base py-6 mt-5 rounded-full transition"
            >
              {loading ? (
                <Spinner className="size-4" data-icon="inline-start" />
              ) : (
                ""
              )}
              Login
            </Button>
          </form>
          <div className="text-center mt-6 text-gray-500 text-xs font-normal gap-1 flex items-center justify-center">
            Create new account!
            <button
              type="button"
              onClick={() => {
                router.push("/register");
              }}
              className="text-brandColor font-semibold hover:underline text-xs cursor-pointer"
            >
              Register
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
