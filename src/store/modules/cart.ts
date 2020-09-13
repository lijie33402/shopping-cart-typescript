import shop from '../../api/shop';
import { Product, ReturnGetters, ActionContext, Store } from '..';

export interface CartItem {
  id: number;
  quantity: number;
}

type CheckStatus = 'successful' | 'failed' | null;

interface CartProduct {
  title: string;
  price: number;
  quantity: number;
}
// state
const state = {
  items: [] as CartItem[],
  checkoutStatus: null as CheckStatus
};

type State = typeof state;

// getters
const getters = {
  cartProducts: (state: State, getters: any, rootState: Store['state'], rootGetters: any): CartProduct[] => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)!;
      return {
        title: product.title,
        price: product.price,
        quantity
      };
    });
  },

  cartTotalPrice: (state: State, getters) => {
    return (getters.cartProducts as CartProduct[]).reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

type Getters = ReturnGetters<typeof getters>;

// mutations
const mutations = {
  pushProductToCart(state: State, { id }: { id: number }) {
    state.items.push({
      id,
      quantity: 1
    });
  },

  incrementItemQuantity(state: State, { id }: { id: number }) {
    const cartItem = state.items.find(item => item.id === id)!;
    cartItem.quantity++;
  },

  setCartItems(state: State, { items }: { items: CartItem[] }) {
    state.items = items;
  },

  setCheckoutStatus(state: State, status: CheckStatus) {
    state.checkoutStatus = status;
  }
};

// actions
const actions = {
  checkout({ commit, state }: ActionContext<State, Getters>) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },

  addProductToCart({ state, commit }: ActionContext<State, Getters>, product: Product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('decrementProductInventory', { id: product.id });
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
