import { Text, Link } from "@chakra-ui/react";

export const NavItem = ({ name, to }) => {
  return (
    <Link href={to}>
      <Text display="block">{name}</Text>
    </Link>
  );
};
