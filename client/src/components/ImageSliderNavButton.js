import { Flex, Image, Text } from "@chakra-ui/react";

function ImageSliderNavButton(props) {
  let place = props.place;

  return (
    <Flex
      marginLeft="50px"
      p="2"
      backgroundColor="#9FB8AD80"
      height="100%"
      width="300px"
      borderRadius="5px"
    >
      <Image
        src={place?.images?.link1}
        height="50px"
        borderRadius="5px"
      ></Image>
      <Text p="2" color="white">
        {place?.name}
      </Text>
    </Flex>
  );
}

export default ImageSliderNavButton;
