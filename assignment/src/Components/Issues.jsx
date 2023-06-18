import React, { useEffect, useState } from "react";
import { Octokit } from "octokit";
import {
  Box,
  Flex,
  Link,
  Text,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useDisclosure,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { VscBlank, VscComment, VscIssues } from "react-icons/vsc";

const Issues = ({ page, status }) => {
  const [issue, setIssue] = useState([]);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_OUTH_TOKEN,
  });

  const githubIssue = async () => {
    try {
      const result = await octokit.request(
        `GET /repos/facebook/react/issues?page=${page}&per_page=50`,
        {
          owner: "facebook",
          repo: "react",
        }
      );

      const titleAndAuthor = result.data;
      console.log(titleAndAuthor);
      setIssue(titleAndAuthor);
    } catch (error) {
      console.log(
        `Error! Status: ${error.status}. Message: ${error.response.data.message}`
      );
    }
  };

  console.log(page, status);

  useEffect(() => {
    githubIssue();
  }, []);

  return (
    <Box>
      {issue &&
        issue.map((el) => {
          if (el.node_id[0] == "I") {
            return (
              <Box
                width={"95%"}
                margin={"auto"}
                padding={"10px 20px"}
                border={"1px solid #191e24"}
                _hover={{ backgroundColor: "#161b22" }}
              >
                <Flex marginBottom={"5px"}>
                  <Box>
                    <VscIssues size={25} color="#3FB950" />
                  </Box>
                  <Box marginLeft={"10px"} width={"87%"}>
                    <Popover placement="top-end" trigger="hover" >
                      <PopoverTrigger>
                        <Text
                          display={"inline"}
                          fontWeight={"semibold"}
                          fontSize={"xl"}
                          _hover={{ color: "#2E80F6" }}
                        >
                          {el.title}
                        </Text>
                      </PopoverTrigger>
                      <PopoverContent
                        backgroundColor={"#161b22"}
                        border={"none"}
                      >
                        <PopoverHeader border={"none"}>
                          <Link
                            textDecoration={"underline"}
                            href={el.repository_url}
                            color={"#7D8590"}
                          >
                            {el.repository_url.split("/")[4] +
                              "/" +
                              el.repository_url.split("/")[5] +
                              " "}
                          </Link>
                          <Text display={"inline"} color={"#7D8590"}>
                            {"on" +
                              " " +
                              Date(el.updated_at).toString().split(" ")[1] +
                              " " +
                              Date(el.updated_at).toString().split(" ")[2] +
                              ", " +
                              Date(el.updated_at).toString().split(" ")[3]}
                          </Text>
                        </PopoverHeader>
                        <PopoverArrow backgroundColor={"#161b22"} />
                        <PopoverBody>
                          <Flex>
                            <Box marginTop={"3px"}>
                              <VscIssues size={25} color="#3FB950" />
                            </Box>
                            <Box width={"270px"} marginLeft={"5px"}>
                              <Text
                                display={"inline"}
                                fontWeight={"semibold"}
                                fontSize={"md"}
                                _hover={{ color: "#2E80F6" }}
                              >
                                {el.title + " "}
                              </Text>
                              <Text
                                display={"inline"}
                                color={"#7D8590"}
                                marginBottom={"5px"}
                              >
                                #{el.number}
                              </Text>
                              <Text noOfLines={2} color={"#7D8590"}>
                                {el.body}
                              </Text>
                              <Box marginTop={"5px"} marginBottom={"5px"}>
                                {/* inside hover labels */}
                                {el.labels &&
                                  el.labels.map((item) => {
                                    if (item.description) {
                                      return (
                                        <Tooltip
                                          label={item.description}
                                          hasArrow
                                          arrowSize={15}
                                          p={2}
                                          textAlign={"center"}
                                          backgroundColor={"#6E7681"}
                                          borderRadius={"10px"}
                                        >
                                          <Box
                                            display={"inline"}
                                            marginLeft={"5px"}
                                            borderRadius={"10px"}
                                            border={`1px solid`}
                                            color={"#" + item.color}
                                            padding={"0px 10px 2px 10px"}
                                            margin={"5px"}
                                          >
                                            <Text
                                              display={"inline"}
                                              fontWeight={"semibold"}
                                            >
                                              {item.name}
                                            </Text>
                                          </Box>
                                        </Tooltip>
                                      );
                                    } else {
                                      return (
                                        <Box
                                          display={"inline"}
                                          marginLeft={"5px"}
                                          borderRadius={"10px"}
                                          border={`1px solid`}
                                          color={"#" + item.color}
                                          padding={"0px 10px 2px 10px"}
                                          margin={"5px"}
                                        >
                                          <Text
                                            display={"inline"}
                                            fontWeight={"semibold"}
                                          >
                                            {item.name}
                                          </Text>
                                        </Box>
                                      );
                                    }
                                  })}
                              </Box>
                            </Box>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>

                    {el.labels &&
                      el.labels.map((item) => {
                        if (item.description) {
                          return (
                            <Tooltip
                              label={item.description}
                              hasArrow
                              arrowSize={15}
                              p={2}
                              textAlign={"center"}
                              backgroundColor={"#6E7681"}
                              borderRadius={"10px"}
                            >
                              <Box
                                display={"inline"}
                                marginLeft={"5px"}
                                borderRadius={"10px"}
                                border={`1px solid`}
                                color={"#" + item.color}
                                padding={"0px 10px 2px 10px"}
                              >
                                <Text
                                  display={"inline"}
                                  fontWeight={"semibold"}
                                >
                                  {item.name}
                                </Text>
                              </Box>
                            </Tooltip>
                          );
                        } else {
                          return (
                            <Box
                              display={"inline"}
                              marginLeft={"5px"}
                              borderRadius={"10px"}
                              border={`1px solid`}
                              color={"#" + item.color}
                              padding={"0px 10px 2px 10px"}
                            >
                              <Text display={"inline"} fontWeight={"semibold"}>
                                {item.name}
                              </Text>
                            </Box>
                          );
                        }
                      })}
                  </Box>
                  <Box marginLeft={"5px"}>
                    {el.assignee && (
                      <Tooltip
                        label={`Assigned to ${el.assignee.login}`}
                        hasArrow
                        arrowSize={15}
                        p={2}
                        textAlign={"center"}
                        backgroundColor={"#6E7681"}
                        borderRadius={"10px"}
                      >
                        <Avatar
                          name="Dan Abrahmov"
                          size="xs"
                          src={el.assignee.avatar_url}
                        />
                      </Tooltip>
                    )}
                  </Box>
                  {el.comments > 0 && (
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      position={"absolute"}
                      right={"60px"}
                      color={"#7D8590"}
                      _hover={{ color: "#2E80F6" }}
                    >
                      <Box>
                        <VscComment size={20} />
                      </Box>
                      <Box marginLeft={"5px"}>
                        <Text>{el.comments}</Text>
                      </Box>
                    </Box>
                  )}
                </Flex>
                <Box display={"flex"}>
                  <VscBlank size={25} />
                  <Text marginLeft={"10px"} fontSize={"sm"} color={"#7D8590"}>
                    #{el.number} opened {el.updated_at} by{" "}
                    <Link
                      href={`https://github.com/facebook/react/issues/created_by/${el.user.login}`}
                      textDecoration={"none"}
                      _hover={{ color: "#2E80F6" }}
                    >
                      {el.user.login}
                    </Link>
                  </Text>
                </Box>
              </Box>
            );
          }
        })}
    </Box>
  );
};

export default Issues;
