import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import NavItem from "./NavItem";
import { TfiAgenda } from "react-icons/tfi";

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="#9FB8AD30"
      color="white"
    >
      <Link to="/" fontWeight="bold" textDecoration="none" color="white">
        <Text fontSize="30px">PISH</Text>
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
            <NavItem to="/login" icon={<FaUser />} text="Account" />
          </Box>
          <Box m="4">
            <NavItem to="/newsletter" icon={<TfiAgenda />} text="Newsletter" />
          <Box m="5">
            <NavItem to="/add-places" icon={<IoAdd/>} text="Account" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
