"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SonnerDemo() {
  return (
    <Button
      className="pt-64 pl-48"
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          className: "bg-zinc-900 text-white",
        })
      }
    >
      Show Toast
    </Button>
  );
}
