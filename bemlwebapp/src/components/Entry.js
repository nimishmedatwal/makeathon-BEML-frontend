const Entry = ({vehc_id, date, data_size}) => {
  return (
    <div className="full-row">
        <span className="row-item border-right">{vehc_id}</span>
        <span className="row-item border-righ">{date}</span>
        <span className="row-item">{data_size}</span>
    </div>  
  )
}

export default Entry