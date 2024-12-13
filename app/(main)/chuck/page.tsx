"use client";

import { useEffect, useState } from "react";
import {
  getChuckysWisdom,
  getAllChuckysWisdomsCount,
  getWisdomAskedToday,
  getWisdomNeededMost,
} from "@/app/services/chuckyApi";
import { ChuckysWisdom } from "@/app/types/ChuckysWisdom";
import { ReceiptText } from "lucide-react";
import { format } from "date-fns";

export default function ChucksWisdom() {
  const [wisdom, setWisdom] = useState<ChuckysWisdom>();
  const [wisdomCount, setWisdomCount] = useState<number>(0);
  const [wisdomNeededMost, setWisdomNeededMost] = useState<string>();
  const [wisdomAskedToday, setWisdomAskedToday] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchWisdom() {
      try {
        setLoading(true);

        // Fetch single wisdom
        const wisdomData: ChuckysWisdom = await getChuckysWisdom();
        setWisdom(wisdomData);

        // Fetch wisdom count
        const count = await getAllChuckysWisdomsCount();
        setWisdomCount(count);

        // Fetch wisdom asked today
        const countWisdomAskedToday = await getWisdomAskedToday();
        setWisdomAskedToday(countWisdomAskedToday);

        // Fetch wisdom needed most
        const wisdomNeededMost = await getWisdomNeededMost();
        setWisdomNeededMost(wisdomNeededMost);
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
        <div className="flex flex-col space-y-4">
          {/* Three-column Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center rounded-lg border border-dashed min-h-[5rem] md:min-h-[8rem] shadow-sm">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-2xl">Amount of wisdoms:</div>
                <div className="text-center text-6xl text-red-600">
                  {wisdomCount}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-lg border border-dashed min-h-[5rem] md:min-h-[8rem] shadow-sm">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-2xl">Times asked for wisdom today:</div>
                <div className="text-center text-6xl text-red-600">
                  {wisdomAskedToday}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-lg border border-dashed min-h-[5rem] md:min-h-[8rem] shadow-sm">
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-2xl">
                  Day of when wisdom was needed most:
                </div>
                <div className="text-center text-6xl text-red-600">
                  {wisdomNeededMost}
                </div>
              </div>
            </div>
          </div>
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
                <span className="text-5xl text-green-50">{wisdom?.wisdom}</span>
                <span className="text-5xl text-green-50">"</span>
              </h1>
              <p className="text-lg text-gray-600">
                Charles Lee Ray (Chucky) -- The Lakeshore Strangler
              </p>
            </div>

            {/* Second Column - Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://debbie-johansson.com/wp-content/uploads/2017/05/childs-play-chucky.jpg"
                alt="Chuck Norris"
                className="rounded-lg shadow-lg max-w-full h-auto scale-80"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
