import './Layout.scss'
import Counter from '../Counter/Counter';
import AshForm from '../AshForm/AshForm';
interface layoutProps {
  trigger:boolean;
  setTrigger:(trigger:boolean)=>void
}
const Layout = (props:layoutProps) => {
  return (
<>
 <div>
   <Counter  />
   <Counter isAsync />

   <hr />
  </div>
  <AshForm data={props} />
</>
  )
}

export default Layout