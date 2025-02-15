import data from "./data";
import "./styles.scss";
import { useState } from "react";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);

  function handleSingleSelection(id) {
    setSelectedId(id);
  }

  return (
    <div className="acc-wrapper">
      <button>Enable Multiple Selection</button>

      <div className="accordion">
        {data && !!data.length ? (
          data.map((dataItem, index) => {
            return (
              <div key={index} className="item">
                <div
                  onClick={() => handleSingleSelection(dataItem.id)}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                <div className="acc-content">
                  {selectedId === dataItem.id ? dataItem.answer : ""}
                </div>
              </div>
            );
          })
        ) : (
          <div>Data not found</div>
        )}
      </div>
    </div>
  );
}
