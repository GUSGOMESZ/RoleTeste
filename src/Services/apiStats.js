import supabase from "./supabase";

async function getUserId(userEmail) {
  const { data: authUser, error: userError } = await supabase
    .from("accounts")
    .select("id")
    .eq("userEmail", userEmail)
    .select()
    .single();

  if (userError) console.log(userError);

  const currentUserId = authUser.userId;

  return currentUserId;
}

async function getTotalById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("total")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total especifico: " + error);
    return null;
  }

  return data.total;
}

async function getRightById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("right")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar rights especifico: " + error);
    return null;
  }

  return data.right;
}

async function getTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalpt")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico: " + error);
    return null;
  }

  return data.totalpt;
}

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
  const currentUserId = getUserId(userEmail);

  let query = supabase
    .from("stats")
    .select("*")
    .eq("userid", currentUserId)
    .single();

  const { data, error } = await query;

  if (error) {
    console.error("erro ao buscar dados:", error);
    return null;
  }

  return data;
}

export async function getAllStats() {
  const { data: usersData, error: usersDataError } = await supabase
    .from("stats")
    .select("*");

  if (usersDataError) console.log(usersDataError);

  return usersData;
}

export async function incrementTotalStats(userEmail) {
  const currentUserId = await getUserId(userEmail);

  let total = await getTotalById(currentUserId);

  // INCREMENTANDO
  total++;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ total: total })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}

export async function incrementRight(userEmail) {
  const currentUserId = await getUserId(userEmail);

  let rights = await getRightById(currentUserId);

  // INCREMENTANDO
  rights++;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ right: rights })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}

export async function incrementTotalPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalpt = await getTotalPointsById(currentUserId);

  totalpt += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalpt: totalpt })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}
