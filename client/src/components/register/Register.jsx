import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { makeRequest } from "../../axios";

const Register = () => {
  const [text, setTexts] = useState({
    name: "",
    lname: "",
  });

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mutation = useMutation({
    mutationFn: (newPost) => makeRequest.post("/register", newPost),
    onSuccess: () => {},
    onError: (error) => {
      console.error("An error occurred:", error);
      // Handle the error, such as displaying an error message to the user
    },
  });

  const handleClick = (e) => {
    e.preventDefault();
    mutation.mutate({ ...text });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>GUMANA KANA </h3>
      <input type="text" name="name" onChange={handleChange} />
      <input type="text" name="lname" onChange={handleChange} />

      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Register;
