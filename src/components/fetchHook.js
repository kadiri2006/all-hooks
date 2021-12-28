import React, { useEffect, useReducer, useState } from "react";

export default function useFetch(myData, method) {
  // const [state, setstate] = useState([]);

  const initialState = {
    loading: false,
    data: [],
    error: "",
  };

  function reducer(state, action) {
    switch (action.type) {
      case "start":
        return { ...state, loading: true };

        break;
      case "success":
        return { ...state, data: action.payload };
      case "failure":
        return { ...state, error: "it is error" };

      default:
        console.log("default value");
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (method === "post") {
      fetch(myData, {
        method,
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ name: "ragu" }),
      })
        .then((res) => res.json())
        .then((out) => console.log(out));
    }

    if (method === "get") {
      dispatch({ type: "start" });

      fetch(myData)
        .then((m) => m.json())
        .then(
          (res) =>
            dispatch({ type: "success", payload: res }) /* setstate(res) */
        );
    }
  }, [myData.url]);

  console.log(state);

  return state;
}
