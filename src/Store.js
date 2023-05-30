import { configureStore } from '@reduxjs/toolkit'

import GeneralReducer from './Features/General/GeneralSlice'



export default configureStore({
    reducer: {
        General: GeneralReducer
    }
})