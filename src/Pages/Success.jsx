import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";

const Success = () => {
  const [success, setSuccess] = useState([]);

  useEffect(() => {
    fetch("/successData.json")
      .then((res) => res.json())
      .then((data) => setSuccess(data))
      .catch((err) => console.error("Error loading stories:", err));
  }, []);
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            Our Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {success.map((s) => (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{s.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Banner></Banner>
    </div>
  );
};

export default Success;
