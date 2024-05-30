import axios from "axios";


const API_KEY = import.meta.env.VITE_API_KEY;
const options2 = {
    method: "POST",
    url: "https://paraphrasing-api2.p.rapidapi.com/retrieve-long-rewriter",
    params: {
      job_id: "idk",
    },
    headers: {
      "X-RapidAPI-Key": `${API_KEY}`,
      "X-RapidAPI-Host": "paraphrasing-api2.p.rapidapi.com",
    },
  };


const ParaphrasedText = ({changeOutput, jobID}) => {
  
  const handleSubmit = () => {
        options2.params.job_id = jobID
        console.log(options2)

        axios.request(options2)
        .then((response) => {
          console.log(response)
          changeOutput(response.data.text)
        })
        .catch((error) => {
          console.log(error)
        })
      }

    return (
         <div>
            <button 
            className="btn btn-primary"
            onClick={handleSubmit}
            >Paraphrase</button>
            <p>{jobID}</p>

        </div>
    )
}


export default ParaphrasedText