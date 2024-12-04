"use client";

import { useEffect, useState } from "react";
import { getChuckysWisdom } from "@/app/services/httpClient";
import { ChuckysWisdom } from "@/app/types/ChuckysWisdom";

export default function ChucksWisdom() {
  const [wisdom, setWisdom] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchWisdom() {
      try {
        setLoading(true);
        const data: ChuckysWisdom = await getChuckysWisdom();
        console.log(data);
        setWisdom(data.wisdom);
      } catch (err) {
        setError("Failed to load wisdom.");
      } finally {
        setLoading(false);
      }
    }

    fetchWisdom();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <>
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Chucky's Wisdom</h1>
        </div>
        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-8">
            {/* First Column - Header */}
            <div className="flex flex-col justify-center items-start space-y-4">
              <h1 className="text-4xl font-bold text-gray-800">
                <span className="text-5xl text-green-50">"</span>
                <span className="text-5xl text-green-50">{wisdom}</span>
                <span className="text-5xl text-green-50">"</span>
              </h1>
              <p className="text-lg text-gray-600">
                Charles Lee Ray (Chucky) -- The Lakeshore Strangler
              </p>
            </div>

            {/* Second Column - Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/098a4b50-32fc-4c96-98b3-d95ea291cdcb/dhjkh0b-546de778-d3bc-4420-aaf6-897852c2c405.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA5OGE0YjUwLTMyZmMtNGM5Ni05OGIzLWQ5NWVhMjkxY2RjYlwvZGhqa2gwYi01NDZkZTc3OC1kM2JjLTQ0MjAtYWFmNi04OTc4NTJjMmM0MDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CqJOqwKENouRm5UaYao7mlVHJTi_oE1blcjzZBdRtjU"
                alt="Chuck Norris"
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
