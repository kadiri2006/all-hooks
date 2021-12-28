import React from "react";
import { GetValues } from "./Contacts";

export default function MyTable() {
  let { arrayOfData, onShow, toggle, onDele, onEdit } = GetValues();
  return (
    <table>
      <thead>
        <tr>
          <td>BasicInfo</td>
          <td>Company</td>
          <td>Actions</td>
          <td>delete/edit</td>
        </tr>

        {arrayOfData.length > 0 &&
          arrayOfData.map((x) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.company}</td>
              <td>{x.action}</td>
              <button type="button" onClick={() => onShow(x.id)}>
                show
              </button>
              <button
                type="button"
                disabled={toggle}
                onClick={() => onEdit(x.id)}
              >
                edit
              </button>
              <button type="button" onClick={() => onDele(x.id)}>
                remove
              </button>
            </tr>
          ))}
      </thead>
    </table>
  );
}
