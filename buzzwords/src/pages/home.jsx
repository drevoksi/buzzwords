import { useState } from "react";
import '../Frontend.css'

export function Home() {
    
        const [text, setText] = useState("");
        const [mp3_file, setMp3File] = useState(null);
        let file = null;
    
        const setFile = (event) => {
            file = event.target.files[0];
        }

        const handleMp3FileChange = async () => {
            if (!text) return;

            const formData = new FormData();
            formData.append("text", text);

            try {
                const response = await fetch("http://127.0.0.1:5000/tts", {
                    method: "POST",
                    body: formData,
                    mode: "cors"
                });
                const data = await response.json();
                setMp3File(await data.path);
            } catch (error) {
                console.log(error);
                setText("Error processing text to speech");
            }
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
    
        const showText = () => {
            document.getElementById("first").style.display = 'block';
        }
    
      return (
        <div>
            <h1>Buzz Statement</h1>
            <input type="file" accept="application/pdf" onChange={setFile}/>
            <button onClick={handleFileChange}>Submit</button>
            <p>{text}</p>

            {/* Add the simplify button if there is text in the paragraph */}
        
            {text && <button onClick={handleMp3FileChange}>Simplify it</button>}
            {mp3_file && 
                <div>
                    <audio controls autoplay loop>
                        <source src={mp3_file} type="audio/mpeg"/>
                    </audio>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DUag7K6te8s?si=GQ-VVWPKpUgQGe3E&amp;controls=0&amp;start=224" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            }
        </div>
      );
}