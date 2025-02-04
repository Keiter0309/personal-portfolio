"use client";

import { useState } from "react";
import {
  FolderPen,
  Captions,
  Folder,
  EqualIcon as EqualApproximately,
  List,
  Contact,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";

export default function PortfolioDashboard() {
  const sections = [
    { id: 1, name: "Name", icon: <FolderPen />, content: "John Doe" },
    {
      id: 2,
      name: "Sub title",
      icon: <Captions />,
      content: "Full Stack Developer",
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
      content: [
        { name: "JavaScript", level: "Advanced" },
        { name: "React", level: "Expert" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Python", level: "Beginner" },
      ],
    },
    {
      id: 6,
      name: "Contact",
      icon: <Contact />,
      content: {
        email: "john.doe@example.com",
        phone: "+1 234 567 8900",
        linkedin: "linkedin.com/in/johndoe",
        github: "github.com/johndoe",
      },
    },
  ];

  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Portfolio Dashboard
      </h1>
      <div className="space-y-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center">
                <span className="mr-4 text-blue-600">{section.icon}</span>
                <h2 className="text-xl font-semibold text-gray-800">
                  {section.name}
                </h2>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
            {expandedSection === section.id && (
              <div className="px-6 pb-6">
                {section.id === 1 && (
                  <p className="text-2xl font-bold text-gray-900">
                    {section.content}
                  </p>
                )}
                {section.id === 2 && (
                  <p className="text-xl text-gray-600">{section.content}</p>
                )}
                {section.id === 3 && (
                  <div className="space-y-4">
                    {section.content.map((project: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.id === 4 && (
                  <p className="text-gray-600">{section.content}</p>
                )}
                {section.id === 5 && (
                  <div className="grid grid-cols-2 gap-4">
                    {section.content.map((skill: any, index: number) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {skill.name}
                        </h3>
                        <p className="mt-2 text-gray-600">
                          Level: {skill.level}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                {section.id === 6 && (
                  <div className="space-y-2">
                    <p className="flex items-center text-gray-600">
                      <Mail className="w-5 h-5 mr-2" /> {section.content.email}
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="w-5 h-5 mr-2" /> {section.content.phone}
                    </p>
                    <a
                      href={`https://${section.content.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" /> LinkedIn
                    </a>
                    <a
                      href={`https://${section.content.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" /> GitHub
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
