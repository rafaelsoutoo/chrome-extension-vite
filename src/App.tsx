
import './App.css'
import { useState } from 'react'

function App() {

  const [colour, setColour] = useState('')

  const onclick = async () => {
    let [tab] = await chrome.tabs.query({active: true})
    chrome.scripting.executeScript<string[], void>({
      target: {tabId: tab.id!},
      args: [colour],
      func: (colour) => {
        document.body.style.backgroundColor = colour
      }
    })
  }

  return (
    <>
      <h3>My Extension with Vite</h3>
      <p>Select color:</p>
      <div className="card">
        <button onClick={onclick}>
         Click me
        </button>
        <input type="color" onChange={(e)=> setColour(e.currentTarget.value)} />
      </div>
    </>
  )
}

export default App
