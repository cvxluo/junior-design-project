import { Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export const NavItem = ({ name, to }) => {
  const { asPath } = useRouter();
  const selected = asPath == to;

  return (
    <NextLink href={to} passHref>
      <Link
        backgroundColor={selected ? "#427199" : "#DBE4EE"}
        borderStyle="solid"
        borderWidth={10}
        borderColor={selected ? "#427199" : "#DBE4EE"}
        margin="1em 2em"
        padding="0 4em"
        borderRadius={20}
        color={selected ? "white" : "black"}
      >
        <Text display="block" fontSize={18} margin="0em" textAlign="center">
          {name}
        </Text>
      </Link>
    </NextLink>
  );
};
