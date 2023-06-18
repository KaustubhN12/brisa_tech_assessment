import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Pagination = ({
  TotalIssues,
  IssuesPerPage,
  ActivePage,
  handlePageChange,
}) => {
  const totalButtons = Math.ceil(TotalIssues / IssuesPerPage);
  console.log(totalButtons);
  return (
    <Flex gap={3}>
      <Button
        isDisabled={ActivePage == 1}
        onClick={() => handlePageChange(ActivePage - 1)}
      >
        Previous
      </Button>
      {ActivePage > 2 && "..."}
      {Array(totalButtons)
        .fill(0)
        .map((el, index) => {
          return (
            <Button
              key={index}
              colorScheme={ActivePage == index + 1 ? "cyan" : "gray"}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          );
        })
        .filter((item, index) => {
          if (index < ActivePage + 2 && index > ActivePage - 2) return true;
        })}
      {ActivePage < totalButtons - 2 && "..."}
      <Button
        isDisabled={ActivePage == totalButtons}
        onClick={() => handlePageChange(ActivePage + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Pagination;
