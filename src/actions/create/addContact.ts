"use server";
import contact from "@/models/contact";
interface Contact {
  email: string;
  phone: string;
  social: {
    linkedIn: string;
    gitHub: string;
  };
}
const addContact = async (payload: Contact): Promise<void> => {
  const {
    email,
    phone,
    social: { linkedIn, gitHub },
  } = payload;

  let metaData = new contact({
    email,
    phone,
    social: { linkedIn, gitHub },
  });
  const data = JSON.parse(JSON.stringify(metaData));
  metaData.save();
  console.log(data);
  return data;
};

export { addContact };
