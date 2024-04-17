import { Paper, Text } from "@mantine/core";

interface CardProps {
  id: number;
  name: string;
}

const Card: React.FC<CardProps> = ({ id, name }) => {
  return (
    <Paper w={"350px"} h={"350px"} shadow="xl" radius="md" p="md">
      <Text>{name}</Text>
    </Paper>
  );
};

export default Card;
