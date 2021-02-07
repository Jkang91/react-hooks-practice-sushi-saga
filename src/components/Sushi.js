import {useState} from 'react';

function Sushi({sushi, plateHelper}) {
  const [emptySushi, setEmptySushi] = useState(false)

  function handleTable() {
    setEmptySushi(true)
    plateHelper(sushi)
  }


  return (
    <div className="sushi">
      <div className="plate" onClick={() => handleTable()}>
        {/* Tell me if this sushi has been eaten! */}
        {emptySushi ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
