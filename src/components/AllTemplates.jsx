import { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import BASE_URL from "../api/baseUrl";

const AllTemplates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await fetch(`${BASE_URL}/resumes`);

        if (!res.ok) {
          throw new Error("Failed to fetch templates");
        }

        const data = await res.json();
        setTemplates(data);
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-error alert-soft">
        <span>{error}</span>
      </div>
    );
  }

  if (templates.length === 0) {
    return (
      <p className="py-10 text-center text-sm text-[#7B8CA6]">
        No templates found.
      </p>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <TemplateCard key={template._id} template={template} />
      ))}
    </section>
  );
};

export default AllTemplates;
