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
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-gray-800">
            Our Success Stories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {success.map((s) => (
              <div
                key={s.name}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-3 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold">{s.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
                  {s.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Banner />
    </div>
  );
};

export default Success;
