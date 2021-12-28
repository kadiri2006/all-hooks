import React, { useEffect, useRef, useState } from "react";
import "./contacts.css";
import useFetch from "./fetchHook";
import MyForm from "./MyForm";
import MyTable from "./MyTable";

let allValues = React.createContext();
export function GetValues() {
  return React.useContext(allValues);
}
export default function Contacts() {
  const [state, setstate] = useState({ name: "", company: "", action: "" });
  const [arrayOfData, setArrayOfData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const subBtn = useRef();
  const [display, setDisplay] = useState({});
  const [loading, setloading] = useState(false);

  let handleForm = (e) => {
    e.preventDefault();
    if (state.name && state.company && state.action) {
      if (!state.id) {
        let newState = { ...state, id: arrayOfData.length + 1 };
        setArrayOfData([...arrayOfData, newState]);
        setstate({ name: "", company: "", action: "" });
        subBtn.current.click();
      } else {
        let editData = arrayOfData.filter((x) => x.id !== state.id);

        editData.splice(state.id - 1, 0, state);

        setArrayOfData(editData);
        setstate({ name: "", company: "", action: "" });
        subBtn.current.click();
      }
    }
  };

  let myData = new Request("userData.json");

  let myRes = useFetch(myData, "get");
  // let myRes = useFetch("https://jsonplaceholder.typicode.com/comments", "get");
  // useFetch("https://jsonplaceholder.typicode.com/users", "post");

  let res = myRes.data;

  useEffect(() => {
    if (myRes.loading === true) {
      setloading(true);
    } else {
      setTimeout(() => {
        setloading(false);
      }, 3000);
    }
  }, [myRes]);

  useEffect(() => {
    setArrayOfData(res);
  }, [res]);

  function onShow(selector) {
    let compare = [...arrayOfData];
    setDisplay(compare.filter((x) => x.id === selector)[0]);
  }

  function onEdit(sele) {
    subBtn.current.click();
    let compare = [...arrayOfData];
    setstate(compare.filter((x) => x.id === sele)[0]);
  }

  function onDele(sele) {
    let indexNumber = arrayOfData.findIndex((x) => x.id === sele);

    let newData = [...arrayOfData];
    newData.splice(indexNumber, 1);
    setArrayOfData(newData);
  }

  return (
    <>
      <h1>Contacts Applications</h1>

      <button type="button" onClick={() => setToggle(!toggle)} ref={subBtn}>
        {!toggle && "Display"} Form
      </button>
      <allValues.Provider
        value={{
          toggle,
          handleForm,
          state,
          setstate,
          arrayOfData,
          onShow,
          onEdit,
          onDele,
        }}
      >
        <MyForm />
        {loading ? <h1>loading...</h1> : <MyTable />}
      </allValues.Provider>

      <div className="infor">
        <i>basicc information:{display.name}</i>
        <i>company:{display.company}</i>
        <i>actions:{display.action}</i>
      </div>
    </>
  );
}
