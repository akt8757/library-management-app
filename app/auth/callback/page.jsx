"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import MainLoader from "@/components/app/mainLoader";
import { Button } from "@base-ui/react";
import Link from "next/link";

export default function UserAuthentication() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const authenticationUser = async () => {
      // 🔥 token process
      await supabase.auth.getSession();

      // 🔥get user
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      const userData = data;

      if (!user) {
        setError(true);
        return;
      }

      //  verify check
      if (!user.email_confirmed_at) {
        setError(true);
        return;
      }

      // check already exists?
      const { data: existing } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      //  insert if not exists
      if (!existing) {
        await supabase.from("users").insert({
          id: user.id,
          email: user.email,
        });
      }
      setSuccess(true);
    };

    authenticationUser();
  }, []);

  return (
    <>
      {/* <MainLoader /> */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-100">
        <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md">
          {success ? (
            <>
              <Image
                className="text-center"
                src="/images/success.gif"
                alt="Success"
                width={100}
                height={100}
              />
              <h2 className="mt-6 text-2xl font-semibold text-brandColor">
                Email Verified Successfully 🎉
              </h2>
              <p className="text-gray-600 text-sm mt-3">
                You can now log in to your account.
              </p>
              <Link href="/dashboard">
                <Button className="bg-brandColor text-white py-2 px-4 rounded-md mt-4 text-center">
                  Access Dashboard
                </Button>
              </Link>
            </>
          ) : error ? (
            <>
              <h2 className="mt-6 text-xl font-semibold text-red-500">
                Verification Failed
              </h2>
              <p className="text-gray-600 text-sm mt-3">
                The link may have expired or already been used.
              </p>
              <Link href="/register">
                <Button className="bg-brandColor p-2 rounded mt-2 text-center">
                  Sign in again
                </Button>
              </Link>
            </>
          ) : (
            <MainLoader />
          )}
        </div>
      </div>
    </>
  );
}
