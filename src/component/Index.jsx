import { useState, useEffect } from "react";
import "./Index.css";
import axios from "axios";
import ParaphrasedText from "./ParaphrasedText";

const API_KEY = import.meta.env.VITE_API_KEY;
// const options = {
//   method: "POST",
//   url: "https://paraphrasing-api2.p.rapidapi.com/long-rewriter",
//   params: {
//     text: "",
//     unique: "1",
//     mode: "fluent",
//   },
//   headers: {
//     "X-RapidAPI-Key": `${API_KEY}`,
//     "X-RapidAPI-Host": "paraphrasing-api2.p.rapidapi.com",
//   },
// };

const Index = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);
  const [jobID, setJobID] = useState("waiting for jobID");

  // updates count on click
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://api.ai21.com/studio/v1/paraphrase",
        { text },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log(response);
      setOutput(response.data.suggestions[0].text);
    } catch (error) {
      console.log(error);
    }
  };

  // Child calls parent to update output message
  // Child retrieves paraphrased text
  const changeOutput = (msg) => {
    setOutput(msg);
  };

  return (
    <div class="container">
      {/* Title */}
      <div>
        <h1 className="honk"> Paraphrasing Tool</h1>
      </div>

      {/* Input/Output boxes */}
      <div class="textbox">
        <div className="box">
          {/* input textbox */}
          <pre className="title" id="inputBox">Input</pre>
          <textarea
            type="text"
            name="text"
            className="responsive-input"
            id="inputBox"
            required=""
            placeholder="Type here..."
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div className="box">
          {/* output textbox */}
          <pre className="title output2" id="outputBox">Output</pre>
          <textarea
            type="text"
            name="text"
            className="responsive-input output"
            id="outputBox"
            value={output}
            placeholder="Output will display here..."
          />
        </div>
      </div>

      {/* <ParaphrasedText changeOutput={changeOutput} jobID={jobID}/> */}
      <div>
        {/* paraphrase button */}
        <button id="paraphrase" onClick={handleSubmit}>
          Paraphrase
        </button>
      </div>
    </div>
  );
};

export default Index;
