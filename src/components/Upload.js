import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export const Upload = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  return (
    <div className="bg-[url('/src/assets/rainbow.jpg')] bg-cover w-screen h-screen">
      <section
        className="h-2/3 w-1/4 bg-white/50 m-auto translate-y-[5%] flex 
      flex-col items-center justify-evenly rounded-[20px] shadow-xl min-w-[350px] p-4 min-h-[600px]"
      >
        <h1 className="text-3xl font-bold text-center">Lad dein CV hoch</h1>
        <h1 className="text-3xl font-bold text-center">
          durch das Klicken vom Upload-Button, akzeptierst du unsere
          Datenschutzerklärung
        </h1>
        <div className="w-full flex w-4/5 min-w-[350px]">
          <input
            className="custom-file-input"
            type="file"
            name="file"
            onChange={changeHandler}
          />
          {isSelected ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
              <p>Filetype: {selectedFile.type}</p>
              <p>Size in bytes: {selectedFile.size}</p>
              <p>
                lastModifiedDate:{" "}
                {selectedFile.lastModifiedDate.toLocaleDateString()}
              </p>
              <Link to="/thanks">
                <button className="custom-file-submit">Submit</button>
              </Link>
            </div>
          ) : (
            <p>wähle eine Datei aus, um Details anzuzeigen</p>
          )}
        </div>
      </section>
    </div>
  );
};
