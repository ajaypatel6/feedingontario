import React from "react";
import Header from "../components/Header";
import Searchbar from "../components/Bars/Searchbar";
import ShortFooter from "../components/ShortFooter";

const Contact = () => {

  const submitReq = () =>{
    alert('submission sent to feedingontario staff')
  }

  return (
    <div>
      <Header></Header>
      <Searchbar></Searchbar>
      <div className="aboutContainer">
        <h2>Contact</h2>
        <div>
          <b>Submit a program request</b>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                ></input>
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              ></input>
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              ></input>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity"></input>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip"></input>
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => submitReq()}
            >
              Submit rquest
            </button>
          </form>
        </div>
      </div>
      <ShortFooter></ShortFooter>
    </div>
  );
};

export default Contact;
