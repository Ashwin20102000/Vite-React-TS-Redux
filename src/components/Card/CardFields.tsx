interface FieldsProps {
  data:{
    key:string,
   value:string
  }
}
function CardFields(props:FieldsProps) {
  return (
  <div className="d-flex">
    <strong>
      <p>{props.data.key} : </p>
    </strong>
    &nbsp;
    <p>{props.data.value!=='Invalid Date' && props.data.value}</p>
  </div>
  )
}

export default CardFields