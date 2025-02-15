import data from "./data";
import "./styles.scss";
import { useState } from "react";

export default function Accordion() {
  const [selectedId, setSelectedId] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(id) {
    setSelectedId((prevId) => (prevId === id ? null : id));
  }

  function handleMultiSelection(id) {
    setMultiple((prev) => {
      if (prev.includes(id)) {
        return prev.filter((prevId) => prevId !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  return (
    <div className="acc-wrapper">
      <button
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          setMultiple([...multiple, selectedId]);
          setSelectedId(null);
        }}
      >
        Enable Multiple Selection
      </button>
      <h1>Multi Enable: {String(enableMultiSelection)}</h1>
      <div className="accordion">
        {data && !!data.length ? (
          data.map((dataItem, index) => {
            return (
              <div key={index} className="item">
                <div
                  onClick={() => {
                    if (enableMultiSelection) {
                      handleMultiSelection(dataItem.id);
                    } else {
                      handleSingleSelection(dataItem.id);
                    }
                  }}
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                <div className="acc-content">
                  {(enableMultiSelection && multiple.includes(dataItem.id)) ||
                  selectedId === dataItem.id
                    ? dataItem.answer
                    : ""}
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
