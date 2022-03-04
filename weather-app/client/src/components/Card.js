
const Card = ({props}) => {
    // console.log(props);
    let date = new Date(props.dt * 1000);
    var pstDate = date.toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
      })
    //   console.log(props.dt)
    return (
        <div className="card">
          <h3 className="day">{pstDate.toString()} PST</h3>
          <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} width="100px" />
          <p><strong>Min. Temperature:</strong> {props.temp.min} &deg;F</p>
          <p><strong>Max. Temperature:</strong> {props.temp.max} &deg;F</p>
          <p><strong>Description:</strong> {props.weather[0].description}</p>
          <p><strong>Humidity:</strong> {props.humidity}%</p>
        </div>
    )
}
export default Card;

