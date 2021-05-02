const initialState = [
  {
    id: 1,
    name: "Category1",
    description: "Description1",
  },

  {
    id: 2,
    name: "Category2",
    description: "Description2",
  },

  {
    id: 3,
    name: "Category3",
    description: "Description3",
  },
];

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = [...state, action.payload];
      return state;
    case "UPDATE":
      const UpdateState = state.map(category =>
        category.id === action.payload.id ? action.payload : category
      );
      state = UpdateState;
      return state;
    case "DELETE":
      const filterCat = state.filter(category =>
        category.id !== action.payload ? category : null
      );
      state = filterCat;
      return state;
    default:
      return state;
  }
};

export default CategoryReducer;
