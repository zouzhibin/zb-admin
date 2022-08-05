import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component
console.log(11111111)

// const req = require.context('./svg', false, /\.svg$/)
const req = import.meta.globEager('./svg/*.svg')
consoole.log('req', req)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)

export default SvgIcon
