import Skill from "@/models/skills";
import db from "@/utils/db";

export async function getSkills() {
  await db();
  
  const skillsData = await Skill.find().lean();

  return JSON.parse(JSON.stringify(skillsData));
}