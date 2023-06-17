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
} from "@chakra-ui/react";
import { VscBlank, VscComment, VscIssues } from "react-icons/vsc";

const Issues = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [issue, setIssue] = useState([]);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GIT_OUTH_TOKEN,
  });

  const githubIssue = async () => {
    try {
      const result = await octokit.request(
        "GET /repos/facebook/react/issues?page=1&per_page=45",
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
                  <Box marginLeft={"10px"} width={"80%"}>
                    {/* <Text
                      display={"inline"}
                      fontWeight={"semibold"}
                      fontSize={"xl"}
                      _hover={{ color: "#2E80F6" }}
                    >
                      {el.title}
                    </Text> */}

                    <Popover placement="top-start" trigger="hover">
                      <PopoverTrigger>
                        {/* <Button>Click me</Button> */}
                        <Text
                          display={"inline"}
                          fontWeight={"semibold"}
                          fontSize={"xl"}
                          _hover={{ color: "#2E80F6" }}
                          
                        >
                          {el.title}
                        </Text>
                        
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader fontWeight="semibold">
                          Popover placement
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore.
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
