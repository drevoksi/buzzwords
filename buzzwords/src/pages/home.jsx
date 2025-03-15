import { useState } from "react";
import '../Frontend.css'

export function Home() {
    
        const [text, setText] = useState("");
        let file = null;
    
        const setFile = (event) => {
            file = event.target.files[0];
        }
    
        const handleFileChange = async () => {
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
    
        const makeSubway = async () => {
                
        }
    
      return (
        <div>
            <h1>Buzz Statement</h1>
            <input type="file" accept="application/pdf" onChange={setFile}/>
            <button onClick={handleFileChange}>Submit</button>
            <p>{text}</p>
            {/* Add the simplify button if there is text in the paragraph */}
        
            {text && <a href><button onClick={() => alert('Button clicked!')}>Simplify it</button></a>}
        </div>
      );
}