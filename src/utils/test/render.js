import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import employeesReducer from '../../Redux/employeesSlice'
import themeReducer from '../../Redux/themeSlice'
 
export function render(ui, options) {
    const store = configureStore({
        reducer: {
          employees: employeesReducer,
          theme: themeReducer,
        },
    })
 
    function Wrapper({ children }) {
        return (
            <MemoryRouter {...options}>
                <Provider store={store}>{children}</Provider>
            </MemoryRouter>
        )
    }
    rtlRender(ui, { wrapper: Wrapper })
}