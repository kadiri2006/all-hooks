import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import { ImperativeHandle } from "./ImperativeHandle";

function sum(a) {
  for (let index = 0; index < 10; index++) {
    console.log("x");
  }

  return +a + 10;
}

export default function Unhooks() {
  const [total, setTotal] = useState(0);
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(true);
  const [avalue, setAvalue] = useState(0);
  const [useImp, setUseImp] = useState("");
  const [onoff, setonoff] = useState(false);

  let info = useMemo(() => sum(total), [total]);

  /* let myColor = {
    color: toggle ? "white" : "red",
    backgroundColor: toggle ? " blueviolet" : "black",
  }; */

  let myColor = useMemo(
    () => ({
      color: toggle ? "white" : "red",
      backgroundColor: toggle ? " blueviolet" : "black",
    }),
    [toggle]
  );

  useEffect(() => {
    console.log("mycolor updated");
    setTimeout(() => {
      setonoff(false);
    }, 1000);
  }, [myColor]);

  let addCallBack = useCallback(
    (a) => {
      for (let index = 0; index < 100; index++) {
        console.log("use call back");
      }
      return +a + total;
    },
    [total]
  );

  const impRef = useRef();

  function onUseImp() {
    setUseImp(impRef.current.my1());
  }
  function onUseImp2() {
    setUseImp(impRef.current.my2());
  }

  useLayoutEffect(() => {
    setonoff(true);
  }, []);

  return (
    <>
      {onoff ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1 style={myColor}>hooks testing</h1>
          <button onClick={() => setToggle(!toggle)}>changle color</button>
          <input
            type="number"
            onChange={(e) => setTotal(sum(e.target.value))}
          />
          <label htmlFor="test">type here for testing :</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            id="test"
          />
          <p>sum : {total}</p>
          <div style={{ marginTop: "1rem" }}>
            <h2>use call baclk</h2>
            <label htmlFor="add">usecall back addition:</label>
            <input
              type="number"
              onChange={(e) => setAvalue(addCallBack(e.target.value))}
            />
            <span>{avalue}</span>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button type="button" onClick={onUseImp}>
              "parent component" useimperativeHandle test
            </button>
            <button type="button" onClick={onUseImp2}>
              "parent component" useimperativeHandle test2
            </button>
            <br />
            <ImperativeHandle ref={impRef} />
            <span>{`getting value is : ${useImp}`}</span>
          </div>
        </div>
      )}
    </>
  );
}
