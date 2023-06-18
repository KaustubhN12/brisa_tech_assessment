import { Box } from "@chakra-ui/react";
import OpenIssues from "./Pages/OpenIssues";

function App() {
  return (
    <Box 
    backgroundColor={"#0d1117"} 
    color={"white"}
    paddingTop={["10px","10px","50px"]}
    paddingBottom={"50px"}
    >
      <OpenIssues />
    </Box>
  );
}

export default App;
