import Issues from "./Components/Issues";
import { Box } from "@chakra-ui/react";
import OpenIssues from "./Pages/OpenIssues";

function App() {
  return (
    <Box 
    backgroundColor={"#0d1117"} 
    // color={"#e6ede4"}
    color={"white"}
    >
      <OpenIssues />
      <Issues />
    </Box>
  );
}

export default App;
