import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import {useEffect, useState} from "react";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [plates, setPlates] = useState([]);
  const [balance, setBalance] = useState(100);
  // const [showSushi, setShowSushi] = useState(true)

  useEffect(() => {
    fetch(API)
      .then(resp => resp.json())
      .then((sushis) => {
        setSushis(sushis)
      })
  },[])

  function handleSushi(sushi) {
    if(balance > sushi.price){
    setPlates([...plates, sushi])
    setBalance(balance - sushi.price)
    } else {
      alert("Yo pay up")
    }
  }
  

  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis} 
      handleSushi={handleSushi}
      // showSushi={showSushi}
      // handleShow={handleShow}
      />
      <Table balance={balance} plates={plates}/>
    </div>
  );
}

export default App;
