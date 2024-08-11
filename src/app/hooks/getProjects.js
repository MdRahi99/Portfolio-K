import Project from "@/models/project";
import db from "@/utils/db";

export async function getProjects() {
  await db();
  
  const projectsData = await Project.find().lean();

  return JSON.parse(JSON.stringify(projectsData));
}