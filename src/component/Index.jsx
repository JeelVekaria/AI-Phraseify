import { useState } from "react";
import "./Index.css";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const Index = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

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
          <pre className="wordCount">Words: {text.length==0? 0 : text.trim().replace(/\s+/g,' ').split(" ").length}</pre>
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
            <pre className="wordCount">Words: {output.length==0? 0 : output.trim().replace(/\s+/g,' ').split(" ").length}</pre>
        </div>
      </div>

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
