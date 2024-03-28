import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom"
import DefaultLayout from "./layouts/DefaultLayout"
import AboutView from "./views/AboutView"
import TableView from "./views/TableView"
import NotFoundView from "./views/NotFoundView"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <DefaultLayout /> }>
      <Route path='*' element={ <NotFoundView /> }/>
      <Route index element={ <AboutView /> } />
      <Route path='/table' element={<TableView />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={ router }></RouterProvider>
}
export default App