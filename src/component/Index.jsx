import { useState, useEffect } from "react";
import "./Index.css";
import axios from "axios";
import ParaphrasedText from "./ParaphrasedText";

const API_KEY = import.meta.env.VITE_API_KEY;

const Index = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(0);
  const [jobID, setJobID] = useState("waiting for jobID")

  // updates count on click
  const handleSubmit = () => {
    setCount(count + 1);
    setOutput(text);
  };

  useEffect(() => {
    // only calls API when button is clicked, thus count>0
    if (count > 0) {
      console.log(count);
      const options = {
        method: "POST",
        url: "https://paraphrasing-api2.p.rapidapi.com/long-rewriter",
        params: {
          text: "",
          unique: "1",
          mode: "fluent",
        },
        headers: {
          "X-RapidAPI-Key": `${API_KEY}`,
          "X-RapidAPI-Host": "paraphrasing-api2.p.rapidapi.com",
        },
      };
      options.params.text = output; // sets user's input into JSON file to be paraphrased
      console.log("OPTIONS:");
      console.log(options);

      const options2 = {
        method: "POST",
        url: "https://paraphrasing-api2.p.rapidapi.com/retrieve-long-rewriter",
        params: {
          job_id: "8e856119-d13a-479d-975c-5afd33c61390",
        },
        headers: {
          "X-RapidAPI-Key": `${API_KEY}`,
          "X-RapidAPI-Host": "paraphrasing-api2.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then((response) => {
          console.log("First axios:")
          console.log(response.data)
          setJobID(response.data.job_id)
        })
        // .then((response) => {
        //   console.log("Second axios:");
        //   setOutput(response.data.text);
        //   console.log(response.data);
        // })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [count]);

  const changeOutput = (msg) => {
    setOutput(msg);
  }

  return (
    <div class="container">
      <div class="textbox">
        <label>
          {/* input textbox */}
          <textarea
            type="text"
            name="text"
            className="responsive-input"
            required=""
            placeholder="Type here..."
            onChange={(event) => setText(event.target.value)}
          />
        </label>

        <label>
          {/* output textbox */}
          <textarea
            type="text"
            name="text"
            className="responsive-input"
            value={output + count}
            placeholder="Output will display here..."
          />
        </label>
      </div>

      <ParaphrasedText changeOutput={changeOutput} jobID={jobID}/>
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
