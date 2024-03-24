"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { revalidatePath } from "next/cache";
signInWithGoogle;

const supabase = createClient();

async function signInWithGoogle(): Promise<void> {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    console.error(error);
  }
  // revalidatePath("/");
}

type user = any;

export function SignInGoogleButton() {
  const [user, setUser] = useState<user | null>();

  useEffect(() => {
    async function getSession(): Promise<void> {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    }
    getSession();
  }, []);

  console.log({ user });

  return <Button onClick={signInWithGoogle}>Sign In with Google</Button>;
}
