import axios from "axios";
import { useState } from "react";
const API_KEY = import.meta.env.VITE_API_KEY;


const ParaphrasedText = ({changeOutput, jobID}) => {

    const options2 = {
        method: "POST",
        url: "https://paraphrasing-api2.p.rapidapi.com/retrieve-long-rewriter",
        params: {
          job_id: "idk",
        },
        headers: {
          "X-RapidAPI-Key":
            `${API_KEY}`,
          "X-RapidAPI-Host": "paraphrasing-api2.p.rapidapi.com",
        },
      };

      const handleSubmit = () => {
        options2.params.job_id = jobID
        console.log("vvvvvvvvvvvvv11")
        console.log(options2)

        axios.request(options2)
        .then((response) => {
          console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv22")
          console.log(response)
          changeOutput(response.data.text)
        })
        .catch((error) => {
          console.log("vvvvvvvvvvvvvvvvvvvvvvvv2")
          console.log(error)
        })
      }

    return (
         <div>
            <button 
            className="btn btn-primary"
            // onClick={() => changeOutput("Changed Here")}
            onClick={handleSubmit}
            >Paraphrase</button>
            <p>{jobID}</p>

        </div>
    )
}


export default ParaphrasedText