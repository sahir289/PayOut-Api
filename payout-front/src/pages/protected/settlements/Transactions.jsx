
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import SettlementTransactions from '../../../features/settlement/transactions/index.jsx'
import { setPageTitle } from '../../../redux/slice/headerSlice.jsx'

function InternalPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Transactions" }))
  }, [])


  return (
    <SettlementTransactions />
  )
}

export default InternalPage
