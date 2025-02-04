"use server";

import skill from "@/models/skill";

interface Skill {
  skillName: string;
  skillLinks: string;
}

const addSkill = async (post: Skill): Promise<void> => {
  const { skillName, skillLinks } = post;

  let payload = new skill({
    skillName,
    skillLinks,
  });
  const data = JSON.parse(JSON.stringify(payload));
  payload.save();
  return data;
};

export { addSkill };
