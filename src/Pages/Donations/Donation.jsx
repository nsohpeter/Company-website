import React from "react";
import "./Donation.css";

const Donation = () => {
  return (
    <div className="main-donation-conatainer">
      <div className="donation-container">
        <h1 className="online-donation">Online Donation</h1>
        <a href="https://donate.changoapp.com/group/5F1285C4-FF03-4B70-A018-618CD094F70E/campaign/64ff7b9a98687">
          Donate now...
        </a>

        <h1>Offline Donations</h1>
        <p>
          To make an offline donation toward this cause, follow these steps::
        </p>
        <ol>
          <li>Write a check payable to “NUNG A Bibile Foundation”</li>
          <li>
            On the memo line of the check, indicate that the donation is for
            “NUNG A Bibile Foundation”
          </li>
          <li>Mail your check to:</li>
        </ol>
        <h1>
          {" "}
          NUNG A Bibile Foundation <br /> Fidelity Bank <br /> 7637126018
        </h1>
      </div>
    </div>
  );
};

export default Donation;
