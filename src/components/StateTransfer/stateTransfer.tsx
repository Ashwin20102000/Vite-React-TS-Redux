import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { AshFormIntitalState } from '../../utils/inputHelper'
import Card from '../Card/Card';
interface stateTransferProps {
  trigger:boolean;
}
const stateTransfer = (props:stateTransferProps) => {
  const state  = useSelector((state:any)=>(state.form.value))
  useEffect(()=>{},[props.trigger])
  return (
    <div>
      <Card details={state} />
    </div>
  )
}

export default stateTransfer