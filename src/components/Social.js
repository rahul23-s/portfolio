import Icon from "@chakra-ui/icon";
import { HStack, Text, Flex } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { FaReact, FaNode, FaVuejs, FaGit } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiRedux, SiPython } from "react-icons/si";
import { CgCPlusPlus } from "react-icons/cg";

import { useMediaQuery } from "@chakra-ui/media-query";

function Social() {
  const [isSmallerScreen] = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Text
        display="inline"
        fontSize="5xl"
        fontWeight="bold"
        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
        bgClip="text"
        pb="10"
      >
        My Skills
      </Text>
      <Grid
        templateColumns={isSmallerScreen ? "repeat(4, 1fr)" : "repeat(8, 1fr)"}
        gap={6}
      >
        <Icon as={FaReact} boxSize="50" />
        <Icon as={SiRedux} boxSize="50" />
        <Icon as={FaVuejs} boxSize="50" />
        <Icon as={FaNode} boxSize="50" />
        <Icon as={DiJavascript1} boxSize="50" />
        <Icon as={CgCPlusPlus} boxSize="50" />
        <Icon as={SiPython} boxSize="50" />
        <Icon as={FaGit} boxSize="50" />
      </Grid>
    </>
  );
}

export default Social;
