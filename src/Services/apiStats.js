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

export async function getStat(userEmail) {
  const { data: authUser, error: userError } = await supabase
    .from("accounts")
    .select("id")
    .eq("userEmail", userEmail)
    .select()
    .single();

  if (userError) console.log(userError);

  const currentUserId = authUser.userId;

  let query = supabase
    .from("stats")
    .select("*")
    .eq("userid", currentUserId)
    .single();

  // const { data: authUserData, error: authUserError } = await supabase
  //   .from("stats")
  //   .select("*")
  //   .eq("userid", currentUserId)
  //   .select()
  //   .single();

  const { data, error } = await query;

  if (error) {
    console.error("erro ao buscar dados:", error);
    return null;
  }

  // console.log(data);

  return data;
}

export async function getAllStats() {}
