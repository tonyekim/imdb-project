"use client";
import React, { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {}, [error]);

  return (
    <div className=" text-center mt-10">
      <h2>Something went wrong please try again</h2>
      <button className=" hover:text-amber-600" onClick={() => reset()}>Try again</button>
    </div>
  );
}
