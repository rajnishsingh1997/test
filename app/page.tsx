"use client";
import React, { useEffect, useState } from "react";
import get from "./utils/fetch";
import Card from "./Component/Card/page";
import { Box, Container, Grid } from "@mantine/core";
import USER_API from "../app/utils/api";

const Page = () => {
  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
  }

  const [user, setUser] = useState<User[]>([]);

  const getUserDetail = async () => {
    const data = await get(USER_API);
    setUser(data);
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  if (!user) {
    return <p>loading.</p>;
  }
  const handleDelete = (id: number) => {
    setUser((user) => user.filter((user) => user.id !== id));
  };
  return (
    <Container fluid>
      <Grid gutter="xs" m={"lg"}>
        {user.map((item: any) => (
          <Grid.Col key={item.id} span={4}>
            <Card {...item} onDelete={handleDelete} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Page;
