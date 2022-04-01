const getters = {
  permission_routes: state => state.permission.routes,
  isCollapse: state => state.app.isCollapse,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,

}
export default getters
