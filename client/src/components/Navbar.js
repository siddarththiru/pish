import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#022b3a"
      color="white"
    >
      <Link to="/" fontWeight="bold" textDecoration="none" color="white">
        <Text fontSize="20px">PISH</Text>
      </Link>
      <Box display={{ base: "none", md: "block" }}>
        <Flex pr="5" align="center">
          <Box m="3">
            <NavItem to="/" icon={<FaHome />} text="Home" />
          </Box>
          <Box m="3">
            <NavItem to="/search" icon={<FaSearch />} text="Search" />
          </Box>
          <Box m="3">
            <NavItem to="/account" icon={<FaUser />} text="Account" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

const NavItem = ({ to, icon, text }) => (
  <Link to={to} display="block" color="white" mr={5} textDecoration="none">
    <Flex align="center">
      {icon}
      <Text>{text}</Text>
    </Flex>
  </Link>
);

export default Navbar;
