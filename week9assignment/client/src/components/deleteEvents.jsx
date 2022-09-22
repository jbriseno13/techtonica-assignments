import { useState } from "react";

const DeleteEvents = ({ deleteEvents }) => {
  const [id, setId] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    deleteEvents(id);
    setId("");
  };
  return (
    <form id="delete-events" action="#" onSubmit={handleSubmit}>
      <fieldset>
        <label>Event ID</label>
        <input
          type="number"
          min="1"
          id="delete-event-id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </fieldset>
      <input type="submit" />
    </form>
  );
};

export default DeleteEvents;
