import { lazy } from 'react'

const PageNotFound = lazy(() => import('components/pages/page-not-found'))
const Roadmap = lazy(() => import('components/pages/roadmap'))

export interface IRoutes {
  [key: string]: IRoute
}

export interface IRoute {
  component: React.LazyExoticComponent<() => JSX.Element>
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
