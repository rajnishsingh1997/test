"use client";
import { Image } from "@mantine/core";
import React, { useEffect, useState } from "react";

interface UserImage {
  name: string;
}
const UserImage: React.FC<UserImage> = ({ name }) => {
  const [logo, setLogo] = useState("");

  const getUserLogo = async (name: string) => {
    const res = await fetch(
      `https://api.dicebear.com/7.x/initials/svg?seed=${name}`
    );
    const data = res;

    setLogo(data.url);
  };
  useEffect(() => {
    getUserLogo(name);
  }, [name]);

  return <Image w={"100px"} h={"100px"} radius={"50%"} src={logo} />;
};

export default UserImage;
