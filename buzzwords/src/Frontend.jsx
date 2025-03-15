import { useState } from "react";

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
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <p>{text}</p>
    </div>
  );
}