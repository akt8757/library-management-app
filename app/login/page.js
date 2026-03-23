import React from "react";
import { supabase } from "../../lib/supabaseClient";
import Login from "@/components/app/register/Login";

export default function Page() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 md:bg-[url('/images/common_bg_2.jpg')] bg-cover bg-center blur"></div>

      {/* Content */}
      <div className="relative pt-40">
        <Login />
      </div>
    </div>
  );
}
