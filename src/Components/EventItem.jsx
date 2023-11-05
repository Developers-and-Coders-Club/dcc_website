// createdAt
// :
// "2023-11-05T05:16:50.540Z"
// date
// :
// "2023-11-06T00:00:00.000Z"
// description
// :
// "Ignite Your Tech Journey at the orientation event for first-year\n              students, brought to you by the powerhouse clubs DCC and GDSC at\n              NITA! Join us for an exciting ride through boundless opportunities\n              and tech innovation. Get ready to embark on this exhilarating\n              journey and witness the unveiling of DCC & GDSC Orientation 2023,\n              exclusively for 1st years."
// heading
// :
// "Maadhyam 3.0"
// imageURL
// :
// "https://res.cloudinary.com/dhzod7y8u/image/upload/v1699161385/axn4me6ipmntlapvtnvc.jpg"
// link
// :
// "https://www.linkedin.com/in/yash-gupta-80a61526b/"
// location
// :
// "Visvesvaraya Auditorium"
// time
// :
// "17:00"
// updatedAt
// :
// "2023-11-05T05:16:50.540Z"
// __v
// :
// 0
// _id
// :

import { useEffect, useState } from "react";
import {
  checkPastEvent,
  convertTimeTo12HourFormat,
  formatDateToCustomFormat,
} from "../utilis/helpers";

// "654725425b1350269f226dd6"

const EventItem = ({ item }) => {
  const [pastEvent, setPastEvent] = useState(false);
  useEffect(() => {
    const isPast = checkPastEvent(item.Date);
    console.log(isPast);
    setPastEvent(isPast);
  }, [item.Date]);

  return (
    <>
      <div class="card card-2 upcoming">
        <img class="eventImg hidden" src={item.imageURL} alt="event img" />
        <img class="eventImg eventImgAlt" src={item.imageURL} alt="" />
        <div class="text-content">
          <div class="text-container">
            <h2 class="heading">{item.heading}</h2>
            <p>{item.description}</p>
            <div>
              <b>
                {formatDateToCustomFormat(item.date)}
                <br />
                {item.location}
                <br />
                {convertTimeTo12HourFormat(item.time)}
              </b>
            </div>
          </div>
          <a href="#" target="_blank" class="btn">
            UPCOMING
          </a>
        </div>
      </div>
    </>
  );
};
export default EventItem;
