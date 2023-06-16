import logo from './logo.svg';
import './App.css';
import { Octokit } from "octokit";
import {useEffect} from 'react'

function App() {

  const octokit = new Octokit({
    auth: "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"
  });

 
  const githubIssue = async() => {
    try {
      const result = await octokit.request("GET /repos/KaustubhN12/dizzy-stitch-9009/issues?state=closed&page=2", {
          owner: "KaustubhN12",
          repo: "dizzy-stitch-9009",
        });
    
      const titleAndAuthor = result.data

      console.log(titleAndAuthor)
    
    } catch (error) {
      console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
    }
  }
  useEffect(()=>{
    githubIssue()
  },[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
