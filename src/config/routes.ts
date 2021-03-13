import Dashboard from 'components/pages/dashboard'
import PageNotFound from 'components/pages/page-not-found'

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: () => JSX.Element
  name: string
  path: string
}

const routes: IRoutes = {
  index: {
    component: Dashboard,
    name: 'index',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-fund',
  },
}

export default routes
