import React from "react";
import Link from "next/link";

export default function DonarBtn({ label = "", href = "#" }) {
  return (
    <Link href={href} className="block w-fit">
      <button className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-5 sm:px-6 py-2 sm:py-2.5 rounded-md font-semibold font-Outfit transition w-full sm:w-auto">
        {label}
      </button>
    </Link>
  );
}
