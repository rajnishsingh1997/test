"use client";
import React, { useEffect, useState } from "react";
import get from "./utils/fetch";
import Card from "./Component/Card/page";
import { Box } from "@mantine/core";

const Page = () => {
  const [user, setUser] = useState<any>();

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
  console.log(user[0]);

  return (
    <Box>
      {user.map((item: any) => (
        <Card key={item.id} {...item} />
      ))}
    </Box>
  );
};

export default Page;
