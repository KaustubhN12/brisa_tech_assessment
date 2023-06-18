import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const Pagination = ({
  TotalIssues,
  IssuesPerPage,
  ActivePage,
  handlePageChange,
}) => {
  const totalButtons = Math.ceil(TotalIssues / IssuesPerPage);
  const pageButtons = [];

  const handleClick = (page) => {
    if (ActivePage !== page) {
      handlePageChange(page);
    }
  };

  const renderPageButton = (page, isActive) => {
    return (
      <Button
        key={page}
        backgroundColor={isActive ? "#1F6FEB" : "#0D1117"}
        _hover={{ border: "1px solid #4C535B" }}
        color={"white"}
        onClick={() => handleClick(page)}
      >
        {page}
      </Button>
    );
  };

  if (totalButtons <= 7) {
    for (let page = 1; page <= totalButtons; page++) {
      pageButtons.push(renderPageButton(page, page === ActivePage));
    }
  } else {
    const ellipsis = (
      <Button
        key="ellipsis"
        backgroundColor={"#0D1117"}
        color={"white"}
        _hover={{ border: "1px solid #4C535B" }}
        isDisabled
      >
        ...
      </Button>
    );

    pageButtons.push(
      renderPageButton(1, 1 === ActivePage),
      ActivePage > 4 && ellipsis
    );

    let startPage = Math.max(2, ActivePage - 2);
    let endPage = Math.min(ActivePage + 2, totalButtons - 1);

    for (let page = startPage; page <= endPage; page++) {
      pageButtons.push(renderPageButton(page, page === ActivePage));
    }

    ActivePage < totalButtons - 3 && pageButtons.push(ellipsis);
    pageButtons.push(
      renderPageButton(totalButtons, totalButtons === ActivePage)
    );
  }

  return (
    <Flex gap={2}>
      <Button
        isDisabled={ActivePage === 1}
        backgroundColor={"#0D1117"}
        color={"#1F6FEB"}
        fontSize={"lg"}
        _hover={{ border: "1px solid #4C535B" }}
        onClick={() => handleClick(ActivePage - 1)}
      >
        <VscChevronLeft size={23} />
        Previous
      </Button>
      {pageButtons}
      <Button
        isDisabled={ActivePage === totalButtons}
        backgroundColor={"#0D1117"}
        color={"#1F6FEB"}
        fontSize={"lg"}
        _hover={{ border: "1px solid #4C535B" }}
        onClick={() => handleClick(ActivePage + 1)}
      >
        Next
        <VscChevronRight size={23} />
      </Button>
    </Flex>
  );
};

export default Pagination;
