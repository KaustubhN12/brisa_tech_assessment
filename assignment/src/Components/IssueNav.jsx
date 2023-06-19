import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { VscIssues, VscCheck, VscTriangleDown } from "react-icons/vsc";
import "../Styles/IssueNav.css";
import axios from "axios";
import { BiCheck } from "react-icons/bi";

const IssueNav = ({ openIssue, closedIssue }) => {
  return (
    <Box>
      <Flex
        width={"95%"}
        margin={"auto"}
        padding={"20px 20px"}
        backgroundColor={"#161b22"}
        border={"1px solid #2e343b"}
        borderRadius={"10px 10px 0px 0px"}
      >
        <Box width={"55%"} display={"flex"} _hover={{ cursor: "pointer" }}>
          <Box display={"flex"}>
            <VscIssues size={25} />
            <Text fontWeight={"semibold"} marginLeft={"10px"}>
              {openIssue} Open
            </Text>
          </Box>
          <Box
            display={"flex"}
            marginLeft={"10px"}
            className={"dullWhiteText"}
            _hover={{ color: "white", cursor: "pointer" }}
          >
            <BiCheck size={25} />
            <Text fontWeight={"semibold"} marginLeft={"10px"}>
              {closedIssue} Closed
            </Text>
          </Box>
        </Box>
        <Box
          display={["none", "none", "flex"]}
          width={"45%"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            className={"dullWhiteText"}
            _hover={{ color: "white", cursor: "pointer" }}
          >
            <Text fontWeight={"semibold"} marginRight={"5px"}>
              Author
            </Text>
            <VscTriangleDown size={12} />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            _hover={{ color: "white", cursor: "pointer" }}
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
            _hover={{ color: "white", cursor: "pointer" }}
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
            _hover={{ color: "white", cursor: "pointer" }}
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
            _hover={{ color: "white", cursor: "pointer" }}
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
            _hover={{ color: "white", cursor: "pointer" }}
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
