import { Flex } from "@chakra-ui/react";
import { NavItem } from "./NavItem";

import urls from "utils/urls";

const links = [
  { name: "Home", url: urls.pages.home },
  { name: "Guidelines", url: urls.pages.guidelines },
  { name: "Past Reports", url: urls.pages.reports },
  { name: "My Account", url: urls.pages.profile },
];

const NavBar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      backgroundColor="#194265"
      color="black"
      padding="0 3em"
    >
      {links.map(({ name, url }) => (
        <NavItem key={name} name={name} to={url} />
      ))}
    </Flex>
  );
};

export default NavBar;
