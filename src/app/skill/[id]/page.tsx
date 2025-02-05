"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SkillEditPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { id } = params;

  const [formData, setFormData] = useState({
    skillName: "",
    skillLinks: "https://",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    const fetchSkill = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/skill/${id}`);
        const data = await response.json();

        if (!response.ok)
          throw new Error(data.error || "Failed to fetch skill");
        setFormData({ skillName: data.skillName, skillLinks: data.skillLinks });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkill();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(`/api/skill/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Failed to update skill");
      // router.push("/dashboard"); // Redirect after update
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center">Edit Skill</h2>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Skill Name"
            value={formData.skillName}
            onChange={(e) =>
              setFormData({ ...formData, skillName: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="url"
            placeholder="https://"
            value={formData.skillLinks}
            onChange={(e) =>
              setFormData({ ...formData, skillLinks: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-md"
          />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Update Skill"}
          </button>
        </form>
      </div>
    </div>
  );
}
