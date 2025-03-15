import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Bruzz for Bros</h1>
      </div>
      
      {/* TODO: Add the file uploading option */}
      <div>
        <form action="" method="get">
          <input type="file" name="pdf" enctype="multipart/form-data" />
          <button>Submit</button>
        </form>
      </div>

      {/* TODO: Add a field for the resultant text */}
      <h2>Temporary text \/ \/ \/ </h2>
      <p> The sky was unusually purple that morning, with clouds that seemed to swirl like cotton candy in a dream. It reminded me of the time I tried to teach my dog to play the piano, though he seemed more interested in chewing the keys than making any music. I once met a man who claimed to have traveled to the moon in a homemade rocket, but his story lacked a certain... consistency. On weekends, I enjoy baking cookies in the shape of dinosaurs, because why not? It's an interesting way to distract myself from the fact that I’m convinced the socks in my laundry have a secret life. In fact, I’m almost certain they organize parties in the dryer when I'm not looking, as I've never been able to find a matching pair after a load. Sometimes, I wonder if the coffee machine is plotting against me, as it always breaks down on the mornings when I have the most meetings. Speaking of meetings, I’ve noticed that everyone always seems to be talking about the weather, as if it's a universal conversation starter, but who even has time to notice if it's sunny or rainy when there are more pressing issues like why my shoes squeak when I walk. Meanwhile, I’ve been learning how to juggle oranges, a skill that has proven to be far more challenging than I anticipated, but at least it’s keeping me entertained while I wait for the mystery of the missing remote to be solved.</p>
    </>
  )
}

export default App
