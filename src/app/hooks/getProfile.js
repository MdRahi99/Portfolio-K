import Profile from "@/models/profile";
import db from "@/utils/db";

export async function getProfile() {
  await db();
  
  const profile = await Profile.findOne().lean();

  return JSON.parse(JSON.stringify(profile));
}