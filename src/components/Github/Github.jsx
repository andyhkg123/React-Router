import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("http://api.github.com/users/andyhkg123");
  const data = await response.json(); // Parse the JSON once
  console.log(data); // Log the parsed JSON data
  return data; // Return the parsed JSON data
};
