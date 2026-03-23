import React from "react";
import { supabase } from "../../lib/supabaseClient";
import Register from "@/components/app/register/Register";

export default function Page() {
  //   const signUp = async () => {
  //     const { data, error } = await supabase.auth.signUp({
  //       email: "asrafulkabir017@gmail.com",
  //       password: "Tuhin@06",
  //     });

  //     console.log("SignUp data:", data);
  //     console.log("SignUp error:", error);
  //   };
  //   signUp();

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 md:bg-[url('/images/signup.jpg')] bg-cover bg-center blur"></div>

      {/* Content */}
      <div className="relative pt-40">
        <Register />
      </div>
    </div>
  );
}
