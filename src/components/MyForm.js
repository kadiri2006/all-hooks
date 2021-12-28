import React from "react";
import { GetValues } from "./Contacts";

export default function MyForm() {
  let values = GetValues();

  return (
    <div>
      {values.toggle && (
        <form onSubmit={values.handleForm}>
          <label htmlFor="name">EnterName: </label>
          <input
            type="text"
            id="name"
            value={values.state.name}
            onChange={(e) =>
              values.setstate((pre) => ({ ...pre, name: e.target.value }))
            }
          />
          <label htmlFor="companyName">CompanyName: </label>
          <input
            type="text"
            id="companyName"
            value={values.state.company}
            onChange={(e) =>
              values.setstate((pre) => ({ ...pre, company: e.target.value }))
            }
          />
          <label htmlFor="action">Action: </label>
          <input
            type="text"
            id="Action"
            value={values.state.action}
            onChange={(e) =>
              values.setstate((pre) => ({ ...pre, action: e.target.value }))
            }
          />
          <button type="submit" className="main_button">
            Add contacts
          </button>
        </form>
      )}
    </div>
  );
}
