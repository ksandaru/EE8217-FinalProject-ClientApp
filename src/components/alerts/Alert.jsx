const Alert = ({sensor,temp,date}) => {
  return(
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Abnormal temperature {temp}°C found on sensor {sensor} </strong><p>updated on: {date}</p>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  )
}
export default Alert;