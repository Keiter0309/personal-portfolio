import dbConnect from "@/lib/db";
import Skill from "@/models/skill";

const fetchSkillById = async (id: string) => {
  await dbConnect();
  try {
    const skillData = await Skill.findById(id);
    if (!skillData) {
      throw new Error("Skill not found");
    }
    const data = JSON.parse(JSON.stringify(skillData));
    return data;
  } catch (error) {
    console.error("Error fetching skill by ID:", error);
    throw error;
  }
};

export { fetchSkillById };
