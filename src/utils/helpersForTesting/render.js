import { render as rtlRender } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// import slices
import employeesReducer from '../../Redux/employeesSlice'
import themeReducer from '../../Redux/themeSlice'
import notificationsReducer from '../../Redux/notificationsSlice'

export function render(ui, options) {
    const store = configureStore({
        reducer: {
          employees: employeesReducer,
          notifications: notificationsReducer,
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

/* The above functions are used to test the components connected to Redux (using the React Testing Library installed by default). The hooks of React-Redux ( useSelector , useDispatch and useStore ) cannot find the Redux store if  the Provider of React-Redux is missing. So, we need to add the Provider.
To avoid having to add it at each render, we can use the Wrapper option of React Testing Library. Thus this render function modifies the render function of React Testing Library & is in its place. */
