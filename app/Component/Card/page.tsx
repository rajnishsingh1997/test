import { Anchor, Button, Flex, Paper, Text } from "@mantine/core";
import { IconTrash, IconUserMinus, IconUserPlus } from "@tabler/icons-react";
import UserImage from "../Logo/page";
import { useState } from "react";
import { IconWorld, IconPhoneCall } from "@tabler/icons-react";

interface CardProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  onDelete: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  //  this means that this is a functional component that takes card prop , take screenshot for later

  id,
  name,
  email,
  phone,
  website,
  onDelete,
}) => {
  const [followUser, setFollowUser] = useState(false);
  const handleFollowUser = (id: number) => {
    console.log(id);
    setFollowUser(!followUser);
  };
  return (
    <Paper w={"350px"} h={"330px"} shadow="xl" radius="lg" p="xl">
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        <UserImage name={name} />
        <Flex justify="center" align="center" gap={"sm"}>
          <Text size="lg">{name}</Text>
          {followUser && (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-star"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
              </svg>
            </span>
          )}
        </Flex>
      </Flex>
      <Flex
        gap={"10px"}
        justify="flex-start"
        align="flex-start"
        direction="column"
        wrap="wrap"
        ml={"-10px"}
      >
        <Flex
          gap={"2px"}
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          <Anchor
            c={"grey"}
            href=""
            target="_blank"
            type="text"
            size={"md"}
            onClick={(e) => e.preventDefault()}
          >
            @{email}
          </Anchor>
          <Anchor
            href=""
            target="_blank"
            type="text"
            c={"grey"}
            size={"md"}
            onClick={(e) => e.preventDefault()}
          >
            <IconPhoneCall size={18} />

            {phone}
          </Anchor>
          <Anchor
            href=""
            target="_blank"
            type="text"
            c={"grey"}
            size={"md"}
            onClick={(e) => e.preventDefault()}
          >
            <IconWorld size={18} />

            {website}
          </Anchor>
        </Flex>
        <Flex mt="sm" w={"100%"}>
          <Button
            onClick={() => handleFollowUser(id)}
            fullWidth
            variant={followUser ? "default" : "filled"}
            mr="5px"
            leftSection={
              followUser ? (
                <IconUserMinus size={18} />
              ) : (
                <IconUserPlus size={18} />
              )
            }
          >
            {followUser ? "Unfollow" : "Follow"}
          </Button>
          <Button
            fullWidth
            ml="5px"
            variant="outline"
            leftSection={<IconTrash size={18} />}
            onClick={() => onDelete(id)}
          >
            Delete
          </Button>
        </Flex>
      </Flex>
    </Paper>
  );
};

export default Card;
