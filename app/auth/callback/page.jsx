"use client";
import React, { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function UserAuthentication() {
  const router = useRouter();
  useEffect(() => {
    const authenticationUser = async () => {
      // 🔥 token process
      await supabase.auth.getSession();

      // 🔥 user নাও
      const { data } = await supabase.auth.getUser();
      const user = data.user;
      const userData = data;
      console.log("get user:", userData);

      if (!user) {
        router.push("/login");
        return;
      }

      // ✅ verify check
      if (!user.email_confirmed_at) {
        alert("Verify your email first ❌");
        router.push("/login");
        return;
      }

      // 🔍 check already exists?
      const { data: existing } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      // 🟢 insert if not exists
      if (!existing) {
        await supabase.from("users").insert({
          id: user.id,
          email: user.email,
        });
      }

      router.push("/dashboard");
    };

    authenticationUser();
  }, []);
  return <div>verifying......</div>;
}
