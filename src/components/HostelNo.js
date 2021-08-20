import { useParams, useHistory } from "react-router-dom";
function HostelNo() {
  let { category } = useParams();
  const history = useHistory();
  let boys_hostel = ["B1", "B2", "B3", "B4", "B5", "B6"];
  let girls_hostel = ["G1", "G2", "G3", "G4", "G5", "G6"];

  const onSelect = (hostelno) => {
    history.push(`/floor/${category}/${hostelno}`);
  };

  return (
    <div className="hostel-container">
      <h1>Choose a Hostel</h1>
      <div className="Hno">
        {category === "boys"
          ? boys_hostel.map((h) => {
              return (
                <button
                  key={h}
                  value={h}
                  className="hostelno"
                  onClick={() => onSelect(h)}
                >
                  <h1>{h}</h1>
                </button>
              );
            })
          : girls_hostel.map((h) => {
              return (
                <button
                  key={h}
                  value={h}
                  className="hostelno"
                  onClick={() => onSelect(h)}
                >
                  <h1>{h}</h1>
                </button>
              );
            })}
      </div>
    </div>
  );
}

export default HostelNo;
