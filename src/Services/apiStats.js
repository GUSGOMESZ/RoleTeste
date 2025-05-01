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

// PORTUGUESE
async function getPortugueseTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalpt")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico pt: " + error);
    return null;
  }

  return data.totalpt;
}

export async function incrementTotalPortuguesePoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getPortugueseTotalPointsById(currentUserId);

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

// LITERATURE
async function getLiteratureTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totallt")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico lt: " + error);
    return null;
  }

  return data.totallt;
}

export async function incrementTotalLiteraturePoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getLiteratureTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totallt: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas lt:", error);
    return null;
  }
}

export async function incrementLiterature(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: ltResponse, error: ltError } = await supabase
    .from("stats")
    .select("lt")
    .eq("userid", currentUserId)
    .single();

  if (ltError) console.error(ltError);

  let qtt = ltResponse.lt + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ lt: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas lt:", error);
    return null;
  }
}

// HISTORIA
async function getHistoryTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalht")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico ht: " + error);
    return null;
  }

  return data.totalht;
}

export async function incrementTotalHistoryPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getHistoryTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalht: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ht:", error);
    return null;
  }
}

export async function incrementHistory(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: htResponse, error: htError } = await supabase
    .from("stats")
    .select("ht")
    .eq("userid", currentUserId)
    .single();

  if (htError) console.error(htError);

  let qtt = htResponse.ht + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ ht: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ht:", error);
    return null;
  }
}

// GEOGRAFIA
async function getGeographyTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalgg")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico gg: " + error);
    return null;
  }

  return data.totalgg;
}

export async function incrementTotalGeographyPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getGeographyTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalgg: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas gg:", error);
    return null;
  }
}

export async function incrementGeography(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: ggResponse, error: ggError } = await supabase
    .from("stats")
    .select("gg")
    .eq("userid", currentUserId)
    .single();

  if (ggError) console.error(ggError);

  let qtt = ggResponse.gg + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ gg: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas gg:", error);
    return null;
  }
}

// FILOSOFIA
async function getPhilosophyTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalph")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico ph: " + error);
    return null;
  }

  return data.totalph;
}

export async function incrementTotalPhilosophyPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getPhilosophyTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalph: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ph:", error);
    return null;
  }
}

export async function incrementPhilosophy(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: phResponse, error: phError } = await supabase
    .from("stats")
    .select("ph")
    .eq("userid", currentUserId)
    .single();

  if (phError) console.error(phError);

  let qtt = phResponse.ph + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ ph: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ph:", error);
    return null;
  }
}

// SOCIOLOGIA
async function getSociologyTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalsc")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico sc: " + error);
    return null;
  }

  return data.totalsc;
}

export async function incrementTotalSociologyPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getSociologyTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalsc: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas sc:", error);
    return null;
  }
}

export async function incrementSociology(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: scResponse, error: scError } = await supabase
    .from("stats")
    .select("sc")
    .eq("userid", currentUserId)
    .single();

  if (scError) console.error(scError);

  let qtt = scResponse.sc + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ sc: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas sc:", error);
    return null;
  }
}

// MATEMATICA
async function getMathTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalmt")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico sc: " + error);
    return null;
  }

  return data.totalmt;
}

export async function incrementTotalMathPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getMathTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalmt: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas mt:", error);
    return null;
  }
}

export async function incrementMath(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: mtResponse, error: mtError } = await supabase
    .from("stats")
    .select("mt")
    .eq("userid", currentUserId)
    .single();

  if (mtError) console.error(mtError);

  let qtt = mtResponse.mt + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ mt: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas mt:", error);
    return null;
  }
}

// FISICA
async function getPhisicsTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalpc")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico pc: " + error);
    return null;
  }

  return data.totalpc;
}

export async function incrementTotalPhisicsPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getPhisicsTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalpc: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas pc:", error);
    return null;
  }
}

export async function incrementPhisics(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: pcResponse, error: pcError } = await supabase
    .from("stats")
    .select("pc")
    .eq("userid", currentUserId)
    .single();

  if (pcError) console.error(pcError);

  let qtt = pcResponse.pc + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ pc: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas pc" + error);
    return null;
  }
}

// QUIMICA
async function getChemistryTotalPointsById(userId) {
  const { data, error } = await supabase
    .from("stats")
    .select("totalch")
    .eq("userid", userId)
    .single();

  if (error) {
    console.log("Erro ao pegar total points especifico ch: " + error);
    return null;
  }

  return data.totalch;
}

export async function incrementTotalChemistryPoints(userEmail, points) {
  const currentUserId = await getUserId(userEmail);

  let totalPoints = await getChemistryTotalPointsById(currentUserId);

  totalPoints += points;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ totalch: totalPoints })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ch:", error);
    return null;
  }
}

export async function incrementChemistry(userEmail) {
  const currentUserId = await getUserId(userEmail);

  const { data: chResponse, error: chError } = await supabase
    .from("stats")
    .select("ch")
    .eq("userid", currentUserId)
    .single();

  if (chError) console.error(chError);

  let qtt = chResponse.ch + 1;

  try {
    const { data, error } = await supabase
      .from("stats")
      .update({ ch: qtt })
      .eq("userid", currentUserId);

    if (error) throw error;

    return data;
  } catch (error) {
    console.error("Erro ao atualizar estatísticas ch" + error);
    return null;
  }
}
