import Resume from "@/models/resume";
import db from "@/utils/db";

export async function getResume() {
  await db();
  
  const resume = await Resume.findOne().lean();

  return JSON.parse(JSON.stringify(resume));
}