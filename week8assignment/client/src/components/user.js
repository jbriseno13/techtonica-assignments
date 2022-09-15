import { useState } from "react";

const UserForm = (props) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    props.grabUser(value);
    console.log(value);
    setValue("");
  };

  return (
    <div className="ListMain">
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Please enter your name"
            className="input"
            style={{ marginBottom: 20}}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          
          <br></br>
         
          <select style={{marginBottom:20}}>
            <option value="category">Select Category</option>
          </select>
          <br></br>
         
          <select style={{ marginBottom: 20}}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <br></br>

          <button className="start_btn" type="submit">Start</button>


        </form>
      </div>
    </div>
  );
};

export default UserForm;