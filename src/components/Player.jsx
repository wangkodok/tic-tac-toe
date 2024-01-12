/* eslint-disable */
import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => {
      return !editing;
    });
  }

  function handleChange(event) {
    console.log(event);
    setPlayerName(() => {
      return event.target.value;
    });
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = "Edit";

  if (isEditing === true) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
