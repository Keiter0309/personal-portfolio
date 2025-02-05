"use server";

import name from "@/models/name";

interface Name {
  firstName: string;
  lastName: string;
}

const addName = async (post: Name): Promise<void> => {
  const { firstName, lastName } = post;
  let payload = new name({ firstName, lastName });
  const data = JSON.parse(JSON.stringify(payload));
  await payload.save();
  return data;
};

export { addName };
