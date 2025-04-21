import supabase from "./supabase";

export async function createStat(userId) {
  const { data, error } = await supabase
    .from("stats")
    .insert([{ userid: userId }])
    .select();

  if (error) {
    console.log("Erro ao criar stat: " + error);
    return null;
  }

  return { data, error };
}
