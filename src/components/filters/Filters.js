import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByFeatured } from "../../features/filter/filterSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const { featured } = useSelector((state) => state.filter);

  const handleFilters = (value) => {
    dispatch(filterByFeatured(value));
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={() => handleFilters("all")}
        className={`lws-filter-btn ${featured === "all" && "active-filter"}  `}
      >
        All
      </button>
      <button
        onClick={() => handleFilters("featured")}
        className={`lws-filter-btn ${
          featured === "featured" && "active-filter"
        }  `}
      >
        Featured
      </button>
    </div>
  );
}
