"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  // redirect("/");
}

export async function signup({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
