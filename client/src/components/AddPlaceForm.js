import React from "react";
import { Flex, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";

function AddPlaceForm() {
  return (
    <Flex flexDir="column">
      <Heading>Add a Place</Heading>
      <FormControl isRequired width="500px">
        <Input placeholder="Name" />
        <Input placeholder="" />
      </FormControl>
    </Flex>
  );
}

export default AddPlaceForm;
