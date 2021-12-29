import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";

function Profile() {
  const [isSmallerScreen] = useMediaQuery("(max-width:1000px)");

  return (
    <Flex
      direction={!isSmallerScreen ? "row" : "column"}
      w="100vw"
      justifyContent="center"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box
        alignSelf="center"
        px={isSmallerScreen ? "5" : "32"}
        py="16"
        border="1px"
        mt="20"
      >
        <Text fontWeight="bold" textAlign="center" fontSize="2xl">
          Checkout My{" "}
          <Text
            display="inline"
            fontSize="2xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            React
          </Text>{" "}
          Projects
        </Text>
        <Flex
          direction={!isSmallerScreen ? "row" : "column"}
          mt={7}
          alignItems="center"
        >
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={!isSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
            cursor="pointer"
            onClick={() => {
              window.open("https://disneyplus-clone-e429d.web.app/home");
            }}
          >
            <img
              src="https://img.icons8.com/nolan/512/disney-plus.png"
              width="60%"
              style={{ margin: "auto" }}
            />

            <Text
              color="black"
              p="4"
              fontSize="xl"
              textAlign="center"
              fontWeight="semibold"
            >
              Disney+ Clone
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={!isSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
            cursor="pointer"
            onClick={() => {
              window.open("https://crypto-dashb.herokuapp.com/");
            }}
          >
            <img
              src="https://img.icons8.com/fluent/100/000000/bitcoin-cryptocurrency.png"
              width="60%"
              style={{ margin: "auto" }}
            />
            <Text
              color="black"
              p="4"
              fontSize="xl"
              textAlign="center"
              fontWeight="semibold"
            >
              CryptoDash
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={!isSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
            cursor="pointer"
            onClick={() => {
              window.open("https://breaking-bad-assign.herokuapp.com/");
            }}
          >
            <img
              src="https://img.icons8.com/nolan/256/breaking-bad.png"
              width="60%"
              style={{ margin: "auto" }}
            />
            <Text
              color="black"
              p="4"
              textAlign="center"
              fontSize="xl"
              fontWeight="semibold"
            >
              BreakingBad
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
