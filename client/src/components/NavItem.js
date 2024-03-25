import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ to, icon, text }) => (
  <Link to={to} display="block" color="white" mr={5} textDecoration="none">
    <Flex align="center">
      {icon}
      <Text pl="2">{text}</Text>
    </Flex>
  </Link>
);

export default NavItem;
