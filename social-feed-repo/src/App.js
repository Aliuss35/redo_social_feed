import { useState } from "react";
import AddComment from "./Components/AddComment/AddComment";
import DisplayComments from "./Components/DisplayComments/DisplayComments";

function App() {
  const [comments, setComments] = useState([]);

  function passupfunction(exa) {
    setComments((comments) => [...comments, exa]);
    console.log(comments);
  }
  return (
    <div>
      <AddComment parentComment={passupfunction} />
      <DisplayComments parentEntry={comments} />
    </div>
  );
}

export default App;
