import shop from '../../api/shop';
import { Product, ActionContext, ReturnGetters } from '..';

// state
const state = {
  all: [] as Product[]
};

type State = typeof state;

// getters
const getters = {};
type Getters = ReturnGetters<typeof getters>;

// mutations
const mutations = {
  setProducts(state: State, products: Product[]) {
    state.all = products;
  },
  decrementProductInventory(state: State, { id }: { id: number }) {
    const product = state.all.find(product => product.id === id);
    if (product) product.inventory--;
  }
};

// actions
const actions = {
  getAllProducts({ commit }: ActionContext<State, Getters>) {
    shop.getProducts((products: Product[]) => {
      commit('setProducts', products);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
