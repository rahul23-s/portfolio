import { Button, ButtonGroup } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { IoMdCall } from "react-icons/io";
import { HiCloudDownload } from "react-icons/hi";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import "./Header.css";
function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Rahul Sharma
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            FrontEnd Developer | ReactJS, VueJS &<br />
            C++ Programmer , 3 ⚝ on CodeChef
          </Text>
          <ButtonGroup variant="outline" spacing="6">
            <Button
              rightIcon={<IoMdCall />}
              mt={8}
              colorScheme="blue"
              onClick={() => window.open("tel: 7024583491")}
            >
              Contact Me
            </Button>
            <Button
              leftIcon={<HiCloudDownload />}
              mt={8}
              colorScheme="blue"
              onClick={() =>
                (window.location.href =
                  "https://drive.google.com/uc?export=download&id=19zbp8su2jLNgrRstVAoqJPPXcc65EOwP")
              }
            >
              Resume
            </Button>
          </ButtonGroup>
          <div className="container">
            <svg class="arrows">
              <path class="a1" d="M0 0 L30 32 L60 0"></path>
              <path class="a2" d="M0 20 L30 52 L60 20"></path>
              <path class="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </div>
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
