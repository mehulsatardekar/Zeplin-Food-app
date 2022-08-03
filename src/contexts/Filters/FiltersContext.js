import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext(null);

const initialvalue = {
  selectType: "",
  dishTypes: [],
  sortBy: "",
  filterVal: 0,
};

const categoryReducer = (state, action) => {
  switch (action.type) {
    case "SORT_ASC":
      return {
        ...state,
        selectType: action.payload,
      };
    case "SORT_DESC":
      return {
        ...state,
        selectType: action.payload,
      };

    case "CHECK":
      return { ...state, dishTypes: [...state.dishTypes, action.payload] };

    case "UNCHECK":
      return {
        ...state,
        dishTypes: state.dishTypes.filter((el) => el !== action.payload),
      };

    case "LOW_TO_HIGH":
      return { ...state, sortBy: action.payload };

    case "HIGH_TO_LOW":
      return { ...state, sortBy: action.payload };
    case "FILTER_VAL":
      return { ...state, filterVal: action.payload };
    case "CELAR_FILTER":
      return initialvalue;
    default:
      throw new Error("dispatch not found");
  }
};

const FilterContextData = ({ children }) => {
  const [state, dispatch] = useReducer(categoryReducer, initialvalue);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);
export { useFilterContext, FilterContextData };
