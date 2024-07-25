import { useReducer } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "Set_First_Name":
          return {
            ...state,
            firstName: action.payload,
          };
        case "Set_Last_Name":
          return {
            ...state,
            lastName: action.payload,
          };
        case "Add_Name":
          return {
            ...state,
            names: [...state.names, `${state.firstName} ${state.lastName}`],
            firstName: "",
            lastName: "",
          };
        default:
          return state;
      }
    },
    {
      names: [],
      firstName: "",
      lastName: "",
    }
  );
  return (
    <div className="App">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="First Name"
          value={state.firstName}
          onChange={(e) =>
            dispatch({ type: "Set_First_Name", payload: e.target.value })
          }
        />
        <input
          placeholder="Last Name"
          value={state.lastName}
          onChange={(e) =>
            dispatch({ type: "Set_Last_Name", payload: e.target.value })
          }
        />
        <button type="submit" onClick={() => dispatch({ type: "Add_Name" })}>
          Add
        </button>
      </form>
      <ul>
        {state.names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
