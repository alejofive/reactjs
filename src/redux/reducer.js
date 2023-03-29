const initialState = {
  tasks: [
    {
      id: 0,
      title: "Hacer mercado",
      completed: false,
    },
  ],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: new Date().getTime(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };

    case "DELETE":
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)],
      };

    case "EDIT":
      console.log(action.payload);
      return {
        ...state,
        tasks: [
          ...state.tasks.map((task) => {
            if (task.id == action.payload.id) {
              return {
                ...task,
                ...action.payload,
              };
            }
            return task;
          }),
        ],
      };

    default:
      return state;
  }
}

export default reducer;
