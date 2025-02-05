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
  Pencil,
  Recycle,
  Trash,
} from "lucide-react";
import useSections from "@/utils/sections.util";
import { fetchSkillById } from "@/actions/edit/editSkill";

export default function PortfolioDashboard() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const fetchSkill = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = await fetchSkillById(id);
    console.log(response);
    return response;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Portfolio Dashboard
      </h1>
      <div className="space-y-6">
        {useSections().map((section) => (
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
                <h4 className="text-xl font-semibold text-gray-800">
                  <span>{section.name}</span>
                </h4>
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
                  <div className="flex justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      {section.content}
                    </p>
                    <div className="flex space-x-3">
                      <button>
                        <Pencil className="h-5 w-5 hover:text-gray-900 hover:cursor-pointer transition-colors duration-200" />
                      </button>
                      <button>
                        <Trash className="h-5 w-5 text-red-500 hover:text-red-600 hover:cursor-pointer transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
                )}
                {section.id === 2 && (
                  <div className="flex justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      {section.content}
                    </p>
                    <div className="flex space-x-3">
                      <button>
                        <Pencil className="h-5 w-5 hover:text-gray-900 hover:cursor-pointer transition-colors duration-200" />
                      </button>
                      <button>
                        <Trash className="h-5 w-5 text-red-500 hover:text-red-600 hover:cursor-pointer transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
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
                      <div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg flex justify-between"
                      >
                        <input
                          type="hidden"
                          readOnly
                          name=""
                          value={skill.id}
                        />
                        <a
                          href={skill.link}
                          target="_blank"
                          className="text-lg font-semibold text-gray-800"
                        >
                          {skill.skill}
                        </a>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => {
                              fetchSkill(skill.id);
                            }}
                          >
                            <Pencil className="h-5 w-5 hover:text-gray-900 hover:cursor-pointer transition-colors duration-200" />
                          </button>
                          <button>
                            <Trash className="h-5 w-5 text-red-500 hover:text-red-600 hover:cursor-pointer transition-colors duration-200" />
                          </button>
                        </div>
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
