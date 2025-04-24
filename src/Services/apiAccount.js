import supabase from "./supabase";

export async function createAccount(userId, userEmail) {
  const { data, error } = await supabase
    .from("accounts")
    .insert([{ userId: userId, userEmail: userEmail }])
    .select();

  if (error) {
    console.log("Erro ao criar account: " + error);
    return null;
  }

  return { data, error };
}
