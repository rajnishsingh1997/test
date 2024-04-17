"use client";
import { Paper, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import get from "./utils/fetch";

const Page = () => {
  const [user, setUser] = useState<{}>();

  const getUserDetail = async () => {
    const data = await get("https://jsonplaceholder.typicode.com/users ");
    setUser(data);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  if (!user) {
    return <p>loading.</p>;
  }
  return <Paper shadow="xs" radius="md" p="xl"></Paper>;
};

export default Page;
