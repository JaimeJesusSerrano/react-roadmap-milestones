// import Home from 'components/pages/home'
import PageNotFound from 'components/pages/page-not-found'
import Roadmap from 'components/pages/roadmap'

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: () => JSX.Element
  name: string
  path: string
}

const routes: IRoutes = {
  home: {
    component: Roadmap,
    name: 'home',
    path: '/',
  },
  pageNotFound: {
    component: PageNotFound,
    name: 'Page not found',
    path: '/page-not-found',
  },
  roadmap: {
    component: Roadmap,
    name: 'Roadmap',
    path: '/roadmap/:id',
  },
}

export default routes
