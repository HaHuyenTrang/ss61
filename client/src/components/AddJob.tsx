import axios from "axios";
import React, { useState } from "react";

interface Jobs {
  id: number;
  name: string;
  status: boolean;
}

export default function AddJob() {
  const [input, setInput] = useState<string>("");
  const [notifi, setNotifi] = useState<string>("");

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.length > 0) {
      setNotifi("");
    }
  };

  const addJob = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (input.trim().length === 0) {
      setNotifi("Tên công việc không được để trống");
      return;
    }

    let newJob: Jobs = {
      id: Math.floor(Math.random() * 100000),
      name: input,
      status: false,
    };

    axios
      .post("http://localhost:3000/jobs", newJob)
      .then(() => {
        setInput("");
        setNotifi("Công việc đã được thêm thành công");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form-outline flex-fill">
        <input
          onChange={inputValue}
          value={input}
          type="text"
          id="form2"
          className="form-control"
        />
        <div style={{ color: "red" }}>{notifi}</div>
        <label className="form-label" htmlFor="form2">
          Nhập tên công việc
        </label>
      </div>
      <button onClick={addJob} type="submit" className="btn btn-info ms-2">
        Thêm
      </button>
    </>
  );
}
