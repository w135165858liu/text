
import {
	getHomeProducts
} from '../api'

import {
	GET_HOME_PRODUCTS
} from './types.js'

export default {
	async getHomeProducts({commit}){
		const products = await getHomeProducts()
		commit(GET_HOME_PRODUCTS,{homeProducts:products})
	}

}


