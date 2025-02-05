"use client";
import { useEffect, useState } from "react";
import {
  Captions,
  EqualApproximately,
  Folder,
  FolderPen,
  List,
  Contact2Icon,
} from "lucide-react";

interface Name {
  firstName: string;
  lastName: string;
}

interface Section {
  id: number;
  name: string;
  icon: JSX.Element;
  content: any;
}

interface Skill {
  _id: string;
  skillName: string;
  skillLinks: string;
}

interface SubTitle {
  name: string;
}

export default function useSections() {
  const [names, setNames] = useState<Name[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [subTitles, setSubTitles] = useState<SubTitle[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameResponse = await fetch("/api/name");
        if (!nameResponse.ok) {
          throw new Error("Network response was not ok for names");
        }
        const nameData = await nameResponse.json();
        setNames(nameData);

        const skillResponse = await fetch("/api/skill");
        if (!skillResponse.ok) {
          throw new Error("Network response was not ok for skills");
        }
        const skillData = await skillResponse.json();
        console.log(skillData);
        setSkills(skillData);

        const subTitleResponse = await fetch("/api/sub-title");
        if (!subTitleResponse.ok) {
          throw new Error("Network response was not ok for sub-title");
        }
        const subTitleData = await subTitleResponse.json();
        setSubTitles(subTitleData);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  const sections: Section[] = [
    {
      id: 1,
      name: "Name",
      icon: <FolderPen />,
      content: names
        .map((name) => `${name.firstName} ${name.lastName}`)
        .join(", "),
    },
    {
      id: 2,
      name: "Sub title",
      icon: <Captions />,
      content: subTitles.map((subTitle) => subTitle.name),
    },
    {
      id: 3,
      name: "Project",
      icon: <Folder />,
      content: [
        {
          title: "Project One",
          description: "A web application built with React and Node.js",
        },
        {
          title: "Project Two",
          description: "Mobile app developed using React Native",
        },
        {
          title: "Project Three",
          description: "E-commerce platform with Next.js and MongoDB",
        },
      ],
    },
    {
      id: 4,
      name: "About me",
      icon: <EqualApproximately />,
      content:
        "Passionate developer with 5 years of experience in creating web and mobile applications. Always eager to learn new technologies and solve complex problems.",
    },
    {
      id: 5,
      name: "Skill",
      icon: <List />,
      content: skills.map((skill) => ({
        id: skill._id,
        skill: skill.skillName,
        link: skill.skillLinks,
      })),
    },
    {
      id: 6,
      name: "Contact",
      icon: <Contact2Icon />,
      content: {
        email: "john.doe@example.com",
        phone: "+1 234 567 8900",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
      },
    },
  ];

  return sections;
}
