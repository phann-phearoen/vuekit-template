import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  color: '#335A9F',
})

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
}