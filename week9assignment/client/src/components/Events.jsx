import { useState } from "react";
import { useReducer } from "react";
import DeleteEvents from "./deleteEvents"; 

//hard code:
const event1 = {
  id: "1",
  name: "Birthday",
  date: "2021-09-01",
  description: "A birthday part for my best friend",
  category: "Celebration",
};

const event2 = {
  id: "2",
  name: "Graduation",
  date: "2021-08-01",
  description: "Class of 2022 Graduates",
  category: "Education",
};

const event3 = {
  id: "3",
  name: "JS Study Session",
  date: "2021-10-01",
  description: "A chance to practice JS interview",
  category: "Education",
};

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched");
      return { ...state, name: action.payload };

    case "editId":
      return { ...state, id: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    case "editDate":
      return { ...state, date: action.payload };

    default:
      return state;
  }
};

const Events = () => {
  const [events, setEvents] = useState([event1, event2, event3]);

  const initialState = {
    id: "",
    name: "",
    date: null,
    decription: "",
    catergory: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, state]); //[...events, state] want events to be events + state()
    console.log(state.name);
    
  };

  const deleteEvents=(deleteId) => {
    const newEvents = events.filter((i) => i.id !== deleteId);
    setEvents(newEvents);
  }

  return (
    <section className="event-management">
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {/* Display all Events here */}
          {events.map((event, index) => {
            return (
              <li key={index}>
                {" "}
                Name: {event.name}, Description:{event.description}, Date:{" "}
                {event.date}, Id: {event.id}, Category: {event.category}
              </li>
            );
          })}
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#" onSubmit={handleSubmit}>
          <fieldset>
            <label>Date </label>
            <input
              type="date"
              id="editDate"
              placeholder="YYYY-MM-DD"
              value={state.date}
              onChange={(e) =>
                dispatch({
                  type: "editDate",
                  payload: e.target.value,
                })
              }
            />
            <br />
            <label>Name </label>
            <input
              type="text"
              id="add-event-name"
              placeholder="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: "editName",
                  payload: e.target.value,
                })
              }
            />
            <br />
            <label>Category </label>
            <input
              type="text"
              id="editCategory"
              placeholder="Category"
              value={state.category}
              onChange={(e) =>
                dispatch({
                  type: "editCategory",
                  payload: e.target.value,
                })
              }
            />
            <br />
            <label>Description </label>
            <input
              type="text"
              id="editDescription"
              placeholder="Details"
              value={state.description}
              onChange={(e) =>
                dispatch({
                  type: "editDescription",
                  payload: e.target.value,
                })
              }
            />
            <br />
            <label>Id </label>
            <input
              type="text"
              id="editId"
              placeholder="Event Id"
              value={state.id}
              onChange={(e) =>
                dispatch({
                  type: "editId",
                  payload: e.target.value,
                })
              }
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" />
        </form>
        <div>
          <h3>Delete Event</h3>
          <DeleteEvents deleteEvents={deleteEvents}/>
        </div>
      </div>
      
    </section>
  );
};

export default Events;
