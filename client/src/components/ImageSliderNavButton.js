import { Flex, Image, Text } from "@chakra-ui/react";

function ImageSliderNavButton(props) {
  let place = props.place;

  return (
    <Flex
      marginLeft="50px"
      p="2"
      backgroundColor="#1F7A8C"
      height="100%"
      width="300px"
    >
      <Image src={place?.images?.link1} height="50px"></Image>
      <Text p="2" color="white">
        {place?.name}
      </Text>
    </Flex>
  );
}

export default ImageSliderNavButton;
