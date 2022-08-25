import CardFields from './CardFields'
interface cardPropesDetails {
    firstName:string,
    lastName:string,
    email:string,
    dob:string,
    country:string
}
interface cardProps {
  details:cardPropesDetails
}

function Card({details}:cardProps)  {
 const keys = [
  "First Name ",
  "Last Name ",
  "Email ",
  "DOB ",
  "Country "
 ]
  return (
         <div className="card">
        <div className="card-header border">User Details</div>
      <div className="card-body border">
        <div className="d-flex justify-content-between">
          <div>      
              <CardFields data={{key:keys[0],value:details.firstName}} />
              <CardFields data={{key:keys[1],value:details.lastName}} />
            </div>
            <div>
              <CardFields data={{key:keys[2],value:details.email}} />
              <CardFields data={{key:keys[3],value:new Date(details.dob).toLocaleDateString()}} />
            </div>
        </div>
      
        <div className="d-flex justify-content-center">
          <strong>
            <p>Country :</p>
          </strong>
          &nbsp;
          <p>{details.country }</p>
        </div>
      </div>
      </div>

  )
}


export default Card
