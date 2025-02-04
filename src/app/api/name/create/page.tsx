"use client";
import { addName } from "@/actions/create/addName";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleAddName = () => {
    const response = addName(formData);
    console.log(response);
    return response;
  };
  return (
    <form onSubmit={handleAddName}>
      <div>
        <label>First Name</label>
        <input
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}
