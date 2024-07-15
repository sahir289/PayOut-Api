import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './slice/headerSlice'
// import themeChangeSlice from './slice/themeChangeSlice'
// import modalSlice from '../features/common/modalSlice'
// import rightDrawerSlice from '../features/common/rightDrawerSlice'
// import leadsSlice from '../features/leads/leadSlice'

const combinedReducer = {
    header: headerSlice,
    // themeSet : themeChangeSlice
    // rightDrawer: rightDrawerSlice,
    // modal: modalSlice,
    // lead: leadsSlice
}

export default configureStore({
    reducer: combinedReducer
})
