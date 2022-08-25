import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StateTransfer from '../StateTransfer/stateTransfer';
// interface layoutProps {
//   data:{trigger:boolean;
//   setTrigger:(trigger:boolean)=>void}
// }
import { addState } from '../../redux/formSlice';
const AshForm = () => {
  const state = useSelector((state:any)=>state.form.value)
  const [formData,setFormData] = useState(state);
  const [trigger,setTrigger] = useState(false);
  const setCountry = (country:string)=>{
    setFormData({
      ...formData,
      country
    })
  }
  const dispatch = useDispatch();
  return (
    <div>
       <h1>Form State </h1>
        <div>
            <form onSubmit={e=>{
              e.preventDefault();
              dispatch(addState(formData));
              setTrigger(!trigger);
            }} autoComplete='off' className='form-group bg-light p-4 border border-secondary-2'>
          <legend style={{backgroundColor:'white'}} className='border py-2 rounded border-3 mt-2'><h1>
        AshForm    </h1>
            </legend>
          <input required 
          value={formData.firstName}
          onChange={e=>setFormData({
            ...formData,firstName:e.target.value||""
          })} autoComplete='off'  placeholder='Firstname' className='form-control shadow-none'  type="text" id="fname" name="fname" />
          <input required
           value={formData.lastName}
           onChange={e=>setFormData({
            ...formData,lastName:e.target.value||""
          })} autoComplete='false' placeholder='Lastname' className='form-control my-2 shadow-none' type="text" id="lname" name="lname" />
          <input required
           value={formData.email}
           onChange={e=>setFormData({
            ...formData,email:e.target.value||""
          })} autoComplete='false' placeholder='Email' className='form-control shadow-none' type="email" id="email" name="email" />
          <input required
        value={formData.dob}
          onChange={e=>setFormData({
            ...formData,dob:e.target.value||""
          })} autoComplete='false' placeholder='DOB' className='form-control my-2 shadow-none' type="date" id="birthday" name="birthday" />
         {/* I used dropdown BS which has some drawbacks recommended to use react-select */}
          <div className="dropdown">
            <div className={`btn ${formData.country?"btn-light text-dark border":"btn-dark"}  form-control shadow-none`} data-bs-toggle="dropdown">{formData.country?formData.country:`Select Country`}</div>
            <ul className="dropdown-menu form-control m-auto">
              <li onClick={()=>setCountry("India 🇮🇳")} className="dropdown-item ">India 🇮🇳</li>
              <li onClick={()=>setCountry("Russia 🇷🇺")} className="dropdown-item">Russia 🇷🇺</li>
              <li onClick={()=>setCountry("Canada 🇨🇦")} className="dropdown-item">Cananda 🇨🇦</li>
              <li onClick={()=>setCountry("Singapore 🇸🇬")} className="dropdown-item">Singapore 🇸🇬 </li>
            </ul>
          </div>
          <input title='Please Fill All Fields'  disabled={formData.country===""} className='form-control my-2 bg-primary text-light'  type="submit" value="Submit" />
          
        </form>


        </div>
        <StateTransfer trigger={trigger} />
    </div>
  )
}

export default AshForm