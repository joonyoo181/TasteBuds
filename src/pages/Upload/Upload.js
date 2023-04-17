import React from "react";
import "./Upload.css";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import UploadButton from "../../components/UploadButton/UploadButton";
import Input from "../../components/Input/Input";
import Dropdown from "../../components/Dropdown/Dropdown";
const { useState } = React;

function Upload() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems2, setSelectedItems2] = useState([]);

  const contents = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const contents2 = ["Option 1", "Option 2", "Option 3", "Option 4"];
  return (
    <>
      <Header />
      <div className="hero">
        <div className="cardContainer">
          <Card
            content={
              <div className="cardContent">
                <div className="cardText">
                  <h1 className="heading">
                    Upload<span> Page</span>
                  </h1>
                  <h3 className="subheading">
                    Want to share a food item? Upload your finding here!
                  </h3>
                </div>
                <div class="sidetoside">
                  <div class="uploadtt">
                    <UploadButton />
                  </div>

                  <div class="sidetoside">others</div>
                </div>
                <div class="dropdown-container">
                  <Dropdown
                    headerTxt="Select Options"
                    contents={contents}
                    selectedItems={selectedItems}
                    setSelectedItems={setSelectedItems}
                  />

                  <Dropdown
                    headerTxt="Select Options2"
                    contents={contents2}
                    selectedItems={selectedItems2}
                    setSelectedItems={setSelectedItems2}
                  />
                </div>
              </div>
            }
            isFloating={true}
          />
        </div>
      </div>
    </>
  );
}

export default Upload;
