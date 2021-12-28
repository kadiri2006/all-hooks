import React, { forwardRef, useImperativeHandle, useRef } from "react";

export function ImperativeHandle(props, ref) {
  const childRef = useRef();
  useImperativeHandle(ref, () => ({
    my1: () => childRef.current.value,
    my2: () => "my2 testing it is fixed value",
  }));

  return (
    <div>
      <input type="text" ref={childRef} />
    </div>
  );
}

ImperativeHandle = forwardRef(ImperativeHandle);
