import { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, showSushi, handleSushi }) {
  const [moreSushi, setMoreSushi] = useState(0)

  const slice = sushis.slice(moreSushi, moreSushi + 4)
  // console.log(slice)
  function plateHelper(sushi) {
    handleSushi(sushi)
  }

  const sushiMenu = slice.map((sushi) => {
    return <Sushi 
    key={sushi.id} 
    sushi={sushi} 
    showSushi={showSushi} 
    plateHelper={plateHelper}/>
  })

  function handleClick() {
    setMoreSushi(moreSushi + 4)
  }
  

  return (
    <div className="belt">
      {sushiMenu}
      <MoreButton handleClick={handleClick} />
    </div>
  );
}

export default SushiContainer;
