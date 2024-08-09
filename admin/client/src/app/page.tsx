
import data from "@/apis/admin.api";
import { buttonVariants } from "@/components/ui/button";
import { LoginForm } from "@/components/ui/LoginForm";
import { UserAuthForm } from "@/components/ui/user-auth-form";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { useEffect } from "react";

export default function Home() {
  // const [email,setEmail] = useState();
  return (
    <>
    <div className="h-screen flex items-center justify-center" >
      <div className="h-srceen" >

        <LoginForm/>
      </div>

    </div>
    </>
  );
}
