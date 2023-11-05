import { useEffect, useState } from "react";
import "./Events.css";

import underline from "./underline.svg";
import EventItem from "../../Components/EventItem";
import { PastEventItem } from "../../Components/PastEventItem";
import { checkPastEvent } from "../../utilis/helpers";

export const Events = ({ page, setPage }) => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    document.title = "Events - DCC";
    window.scrollTo(0, 0);
    setPage("events");
    document.getElementById("navbarNav").classList.remove("show");
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api-admin-dcc.onrender.com/events");
        if (res.ok) {
          const data = await res.json();
          setEventList(data);
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataWithInterval = () => {
      fetchData();
      const intervalId = setInterval(fetchData, 20000);
      return () => clearInterval(intervalId);
    };
    fetchDataWithInterval();
  }, []);

  return (
    <div className="events-wrapper">
      <div className="underline-header">
        <span>Events</span>
        <img src={underline} alt="" />
      </div>

      {/* <div class="card">
                <img
                    class="eventImg hidden"
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/2.png?alt=media&token=3ab8069b-e0b3-4e23-b1b0-cae7dd8602d0'
                    alt="event img"
                />
                <img
                    class='eventImg eventImgAlt'
                    src='https://firebasestorage.googleapis.com/v0/b/dcc-nita.appspot.com/o/poster1.png?alt=media&token=17fc460d-7945-47bf-888b-9aff12ad54ee'
                    alt=''
                />
                <div class="text-content">
                    <div class="text-container">
                        <h4 class="heading">Hack the Future: HACK-NITA</h4>
                        <p>


                            A statewide hackathon coming to Aayam 8.0, and it's sure to be a smashing success! Teams from all corners of the state will come together to collaborate and create groundbreaking projects. Participants will have the chance to demonstrate their abilities, network with peers, and make invaluable connections.

                        </p>
                    </div>
                    <a href="https://hacknita.dccnita.tech/" class="btn">Know more</a>
                </div>
            </div> */}

      {eventList.map((item) =>
        !checkPastEvent(item.date) ? (
          <EventItem item={item} key={item.heading} />
        ) : (
          <>
            <h2 class="heading">Past Events</h2>
            <PastEventItem item={item} key={item.heading} />
          </>
        )
      )}
    </div>
  );
};
