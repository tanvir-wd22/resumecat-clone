import { useEffect, useState } from "react";
import REcategory from "./REcategory";
import BASE_URL from "../api/baseUrl";

const REdataload = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/resumeExamples`);
        if (!res.ok) throw new Error("Data load failed");
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div role="alert" className="alert alert-error max-w-xl mx-auto my-10">
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {categories.map((category) => (
        <REcategory key={category._id} category={category} />
      ))}
    </div>
  );
};

export default REdataload;
