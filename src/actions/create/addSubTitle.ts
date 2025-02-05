"use server";
import subTitle from "@/models/subTitle";

interface SubTitle {
  name: string;
}

const addSubTitle = async (payload: SubTitle): Promise<SubTitle> => {
  const { name } = payload;
  console.log("Payload:", payload);

  let metaData = new subTitle({
    name,
  });

  const data = JSON.parse(JSON.stringify(metaData));
  await metaData.save();

  return data;
};

export { addSubTitle };
