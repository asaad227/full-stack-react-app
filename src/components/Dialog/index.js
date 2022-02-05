import React, { useState, useEffect } from "react";
import "./index.css";

export default function Dialog() {
  const [api, setApi] = useState([]);
  const [input, setInput] = useState("");
  //     function numberFinder(input){
  //     const newNumber =[]
  //     const random = Math.ceil(Math.random()* 2) * input;
  //     const random2 = Math.ceil(Math.random() * 3) * input;
  //     const random3 =Math.ceil(Math.random()* 4) * input;

  //         newNumber.push(random);
  //         newNumber.push(random2)
  //         newNumber.push(random3)

  //   return newNumber;
  //   }

  //   const newItem = numberFinder(input);

  //   const first = console.log(newItem[1]);
  //   const second = console.log(newItem[0]);
  //   const third = console.log(newItem[2]);

  const url = `https://the-one-api.dev/v2/quote?limit=0${input}`;
  useEffect(() => {
    async function getApi() {
      if (!url) {
        return;
      }
      const response = await fetch(`${url}`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer Y2_rEjh-ja2u_vT44WOE",
        },
      });

      const data = await response.json();
      console.log(data);
      const { docs } = data;
      console.log(docs);
      setApi(docs);
    }
    getApi();
  }, [url]);

  function handleSubmit(e) {
    e.preventDefault();
    setInput(e.target[0].value);
  }

  return (
    <div className="container">
      <div>
        <form onSubmit={handleSubmit} type="submit" className="form">
        <p className="quotes">Do you wanna recall dialog from Lord of the Ring just type in a number and get the dialog.</p>
          <input className="int" type="text" placeholder="Please enter number" />
          <button className="btn">Submit</button>
        </form>
      </div>
      <div className="flex-box-1">
        <div></div>

        {api.map((e, index) => {
          if (index < 5) {
            return (
              <ul key={e._id}>
                <li className="quotes">{e.dialog}</li>
              </ul>
            );
          }
          return <div key={e._id}></div>;
        })}
        {/* <p className='quotes'>{api.dialog}</p> */}
      </div>
      <div className="flex-box">
        {api.map((e, index) => {
          if (index < 11 && index > 6) {
            return (
              <ul key={e._id}>
                <li className="quotes">{e.dialog}</li>
              </ul>
            );
          }
          return <div key={e._id}></div>;
        })}
      </div>
      <div className="flex-box-2">
        {api.map((e, index) => {
          if (index < 16 && index > 12) {
            return (
              <ul key={e._id}>
                <li className="quotes">{e.dialog}</li>
              </ul>
            );
          }
          return <div key={e._id}></div>;
        })}
      </div>
    </div>
  );
}
