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

async function getTotalPointsById(userId, sub) {
  const { data, error } = await supabase
    .from("stats")
    .select(sub)
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
  const currentUserId = await getUserId(userEmail);

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

export async function incrementTotalPortuguesePoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getTotalPointsById(currentUserId, "totalpt");

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalpt: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}

export async function incrementPortuguese(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: ptResponse, error: ptError } = await supabase
    .from("stats")
    .select("pt")
    .eq("userid", currentUserId)
    .single();

  if (ptError) console.error(ptError);

  let qtt = ptResponse.pt + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ pt: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}

export async function incrementTotalLiteraturePoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getTotalPointsById(currentUserId, "totallt");

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totallt: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}

export async function incrementLiterature(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: ltResponse, error: ptError } = await supabase
    .from("stats")
    .select("lt")
    .eq("userid", currentUserId)
    .single();

  if (ptError) console.error(ptError);

  let qtt = ltResponse.lt + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ lt: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas:", error);
    return null;
  }
}
