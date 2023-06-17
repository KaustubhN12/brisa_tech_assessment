import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { VscIssues, VscCheck, VscTriangleDown } from "react-icons/vsc";
import "../Styles/IssueNav.css";

const IssueNav = () => {
  return (
    <Box>
      <Flex
        width={"95%"}
        margin={"auto"}
        padding={"20px 20px"}
        backgroundColor={"#161b22"}
        border={"1px solid white"}
      >
        <Box width={"55%"} display={"flex"}>
          <Box display={"flex"}>
            <VscIssues size={25} />
            <Text fontWeight={"semibold"} marginLeft={"10px"}>
              993 Open
            </Text>
          </Box>
          <Box display={"flex"} marginLeft={"10px"} className={"dullWhiteText"} _hover={{color:"white"}}>
            <VscCheck size={25} />
            <Text fontWeight={"semibold"} marginLeft={"10px"}>
              11,295 Closed
            </Text>
          </Box>
        </Box>
        <Box display={"flex"} width={"45%"} justifyContent={"space-around"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Author
            </Text>
            <VscTriangleDown size={12} />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            _hover={{ color: "white" }}
            className={"dullWhiteText"}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Label
            </Text>
            <VscTriangleDown size={12} />
          </Box>{" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Projects
            </Text>
            <VscTriangleDown size={12} />
          </Box>{" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Milestones
            </Text>
            <VscTriangleDown size={12} />
          </Box>{" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Assignee
            </Text>
            <VscTriangleDown size={12} />
          </Box>{" "}
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Sort
            </Text>
            <VscTriangleDown size={12} />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default IssueNav;
