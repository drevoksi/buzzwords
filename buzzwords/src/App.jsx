import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FileUpload from '/uploadFile.jsx'
import './App.css'

function App() {
  const [text_statement] = useState(0)

  return (
    <>
      <div>
        <h1>Bruzz for Bros</h1>
      </div>
      
      {/* TODO: Add the file uploading option */}
      <div>
        <form action="" method="POST">
          <input type="file" name="pdf" enctype="multipart/form-data" />
          <button>Submit</button>
        </form>
      </div>
      <FileUpload />
      <p>{text_statement}</p>
    </>
  )
}

export default App
