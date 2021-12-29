import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "@chakra-ui/icon";
import { GiBatMask, GiAlienBug, GiAtom } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { RiVuejsLine } from "react-icons/ri";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import { useMediaQuery } from "@chakra-ui/media-query";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isSmallerScreen] = useMediaQuery("(max-width:600px)");

  return (
    <VStack p={5}>
      <Flex w="100%" direction="row" alignItems="center">
        <Heading
          ml={isSmallerScreen ? "0" : "8"}
          size="md"
          fontWeight="semibold"
          color="cyan.400"
        >
          <Icon
            as={GiAtom}
            boxSize={isSmallerScreen ? "35" : "50"}
            color={isDark ? "#fff" : "#000"}
          />
          <Icon
            as={RiVuejsLine}
            boxSize={isSmallerScreen ? "35" : "50"}
            color={isDark ? "#fff" : "#000"}
          />
        </Heading>

        <Spacer></Spacer>
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => {
            window.location.href = "https://www.linkedin.com/in/rahul23-s/";
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<SiCodechef />}
          isRound="true"
          onClick={() => {
            window.location.href = "https://www.codechef.com/users/r___sharma";
          }}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() => {
            window.location.href = "https://github.com/rahul23-s";
          }}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={() => {
            toggleColorMode();
          }}
        ></IconButton>
      </Flex>
      <Header></Header>
      <Social></Social>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
