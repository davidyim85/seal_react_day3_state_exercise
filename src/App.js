import { useState } from 'react';
import './styles.css'

const App = () => {

  const colors = [
    'Blue',
    'Coral',
    'Violet',
    'Greenery',
    'Rose',
    'Serenity',
  ]

  const [colorInd, setColorInd] = useState(0)


  return (
    <div className={`app ${colors[colorInd]}`}>
      <h1 className={'title'}>Color: {colors[colorInd]}</h1>
      {colors.map((v, i) => {
        return (<button onClick={() => setColorInd(i)}>{v}</button>)
      })}
      <div>

        <button
          onClick={() => {
            let previous = colorInd - 1;
            if (colorInd === 0) previous = colors.length - 1;
            setColorInd(previous)
          }}
        >
          previous
        </button>
        <button
          onClick={() => {
            let next = colorInd + 1;
            if (colorInd === colors.length - 1) next = 0;
            setColorInd(next)
          }}
        >
          next
        </button>
      </div>
      <button
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * colors.length);
          setColorInd(randomIndex)
        }}
      >
        random
      </button>

    </div>
  );
}

export default App;
