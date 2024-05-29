import { useState } from "react";
import "./Index.css";

const Index = () => {
  const [text, setText] = useState("a");

  return (
    <div class="container">
      <div class="textbox">
        <label>
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
          <textarea
            type="text"
            name="text"
            className="responsive-input"
            value={text}
          />
        </label>
      </div>
      <div>
        <button id="paraphrase">
            Paraphrase
        </button>
      </div>
    </div>
  );
};

export default Index;
