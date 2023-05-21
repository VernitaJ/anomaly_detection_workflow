import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Links = () => {
  let [selected, setSelected] = React.useState(null);

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setSelected(e.target.innerText);
  };

  return (
    <div>
      <Selection>
        <Link to="/">
          <Item
            style={
              selected === "Process Workflow"
                ? { backgroundColor: "darkgray", color: "white" }
                : { backgroundColor: "#f2f2f2" }
            }
            onClick={() => setSelected("Process Workflow")}
          >
            Process Workflow
          </Item>
        </Link>

        <Link to="/documentation">
          <Item
            style={
              selected === "Documentation"
                ? { backgroundColor: "darkgray", color: "white" }
                : { backgroundColor: "#f2f2f2" }
            }
            onClick={(e) => handleClick(e)}
          >
            Documentation
          </Item>
        </Link>

        <Link to="/system">
          <Item
            style={
              selected === "System"
                ? { backgroundColor: "darkgray", color: "white" }
                : { backgroundColor: "#f2f2f2" }
            }
            onClick={(e) => handleClick(e)}
          >
            System Architecture Example
          </Item>
        </Link>
      </Selection>
    </div>
  );
};

export default Links;

const Item = styled.div`
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: black;
  }
  a:visited {
    color: inherit;
  }
  a:hover {
    color: #ff6600;
  }
`;

const Selection = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
`;
