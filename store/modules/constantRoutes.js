import routers from '@/router/routers.js'

const filterRoutes = routers.filter((item) => item.children)
console.log(filterRoutes);

const state = {
  routes: filterRoutes
}

export default {
  state
}