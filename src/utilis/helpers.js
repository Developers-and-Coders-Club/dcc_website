export const checkPastEvent = (eventDate) => {
  const currentDateTime = new Date();
  const eventDateTime = new Date(eventDate);
  const currentDateUTC = Date.UTC(
    currentDateTime.getFullYear(),
    currentDateTime.getMonth(),
    currentDateTime.getDate()
  );
  const eventDateUTC = Date.UTC(
    eventDateTime.getFullYear(),
    eventDateTime.getMonth(),
    eventDateTime.getDate()
  );
  if (eventDateUTC < currentDateUTC) {
    return true;
  } else {
    return false;
  }
};

export function formatDateToCustomFormat(dateString) {
  const eventDate = new Date(dateString);

  const options = {
    month: "long",
    day: "numeric",
    weekday: "long",
  };

  const formattedDate = eventDate.toLocaleDateString("en-US", options);

  const day = eventDate.getDate();
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const dayWithSuffix = day + suffix(day);

  return formattedDate.replace(String(day), dayWithSuffix);
}

export function convertTimeTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(":");
  let hours12 = hours % 12 || 12;
  const period = hours < 12 ? "A.M." : "P.M.";
  const time12 = `${hours12}:${minutes} ${period}`;
  return time12;
}
