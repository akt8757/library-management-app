import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "./supabaseClient";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getUserData = async () => {
  const { data } = await supabase.auth.getUser();
  return data;
};
