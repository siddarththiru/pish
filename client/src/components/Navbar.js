import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaHome, FaNewspaper, FaPlus, FaSearch, FaUser } from "react-icons/fa";
import NavItem from "./NavItem";

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
            <NavItem
              to="/newsletter"
              icon={<FaNewspaper />}
              text="Newsletter"
            />
          </Box>
          <Box m="5">
            <NavItem to="/add-places" icon={<FaPlus />} text="Add places" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Navbar;
