import supabase from "./supabase";
import { createStat } from "./apiStats";
import { createAccount } from "./apiAccount";

export async function signup({ email, password }) {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error(error.message);

  const newUserId = data.user.id;
  const newUserEmail = email;

  await createStat(newUserId);
  await createAccount(newUserId, newUserEmail);

  return data;
}

export async function signin({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}
