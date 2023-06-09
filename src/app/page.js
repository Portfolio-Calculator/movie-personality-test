"use client";
import React from "react";
// import Recommendation from "../component/Recommendation";
import Link from "next/link";

export default function Home() {
  const query = "blue space invader";
  const personalityData = "Adventurous";
  const personalityDescriptionData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae commodo tellus. Sed eu tristique elit. Vestibulum ac orci condimentum, ullamcorper risus eu, fermentum neque. Integer ullamcorper est nec ligula lobortis, in dictum massa aliquet. Nam volutpat ligula quis feugiat tempus. Quisque eleifend neque ac feugiat rutrum. Suspendisse potenti. Sed pharetra pellentesque risus non tempus. Mauris ut quammi. Aliquam eu purus vitae ex tincidunt rutrum at vel tellus. Prointempor nibh vel venenatis egestas. Curabitur dapibus augue at nislvolutpat, id finibus massa tristique. Suspendisse potenti. Donec sitamet diam ac quam feugiat congue ut non ex. Sed dictum tortor id enimhendrerit feugiat. Donec sit amet diam ac quam feugiat congue ut nonex. Sed dictum tortor id enim hendrerit feugiat.";

  return (
    <main className="flex flex-col w-screen px-2 sm:px-5 h-screen bg-gray-900 justify-center items-center text-center">
      <h1 className="flex m-3 p-1 sm:m-5 sm:p-2 justify-center text-4xl sm:text-8xl font-bold text-white mb-2 sm:mb-4">
        Movie Personality Test
      </h1>

      <span className="flex m-2 p-1 sm:p-2 justify-center text-base sm:text-xl text-white">
        Receive Movie Recommendations Based on your Personality!
      </span>

      <Link href="/quiz" className="flex justify-center">
        <button className="px-3 sm:px-4 m-2 sm:m-2 py-2 rounded bg-blue-500 text-white font-bold text-sm sm:text-base">
          Take the Quiz!
        </button>
      </Link>
    </main>
  );
}
