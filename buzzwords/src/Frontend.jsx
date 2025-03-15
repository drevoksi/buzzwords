import { useState } from "react";
import './Frontend.css'

export default function Frontend() {
    const [text, setText] = useState("");

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
        const response = await fetch("http://127.0.0.1:5000/upload", {
            method: "POST",
            body: formData,
            mode: "cors"
        });
        const data = await response.json();
        setText(data.text);
        } catch (error) {
            console.log(error);
            setText("Error processing file");
        }
  };

  return (
    <div>
        <h1>Buzz Statement</h1>
        <form action="" method="POST">
            <input type="file" accept="application/pdf" onChange={handleFileChange}/>
            <button>Submit</button>
        </form>
        <p>{text}</p>
    </div>
  );
}