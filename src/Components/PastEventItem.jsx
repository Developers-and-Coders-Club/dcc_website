export const PastEventItem = ({ item }) => {
  return (
    <>
      <div class="card card-2">
        <img class="eventImg hidden" src={item.imageURL} alt="event img" />
        <img class="eventImg eventImgAlt" src={item.imageURL} alt="" />
        <div class="text-content">
          <div class="text-container">
            <h2 class="heading">{item.heading}</h2>
            <p>{item.description}</p>
          </div>
          <a href={item.link} target="_blank" class="btn" rel="noreferrer">
            Know more
          </a>
        </div>
      </div>
    </>
  );
};
