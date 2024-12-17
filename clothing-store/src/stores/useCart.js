import {defineStore} from 'pinia';
import {useToast} from 'vue-toastification';

const toast = useToast();

export const useCart = defineStore('cart', {
    state: () => ({
        kidsTop:[
    
                {
                    id: 1,
                    name: 'Boy Collection',
                    price: $999,
                },

                {
                    id: 2,
                    name: 'Unisex Collection',
                    price: $1199,
                },

                {
                    id: 3,
                    name: 'Girls Collection',
                    price: $999,
                },
            
        ],
        kidsShort: [
            {
                id: 1,
                name: 'Boy Collection',
                price: $999,
            },

            {
                id: 2,
                name: 'Unisex Collection',
                price: $1199,
            },

            {
                id: 3,
                name: 'Girls Collection',
                price: $999,
            },
        ],

        kidsShoe: [
            {
                id: 1,
                name: 'Boy Collection',
                price: $999,
            },

            {
                id: 2,
                name: 'Unisex Collection',
                price: $1199,
            },

            {
                id: 3,
                name: 'Girls Collection',
                price: $999,
            },
        ],
        cartItems: []
    }),
    getters: {
        countCartItems(state) {
            return state.cartItems.length;
        }
    },

    actions: {
        addToCart(items) {
            let index = this.cartItems.findIndex(product => product.id === items.id);
            if (index !==-1) {
                this.cartItems[index].quantity +=1;
                toast.success("Your item has been updated", {
                    timeout:2000
                });
            } else {
                items.quantity = 1;
                this.cartItems.push(items);
                toast.success("Your item has been saved", {
                    timeout:2000
                });
            }
        },
        incrementQ(items) {
            let index = this.cartItems.findIndex(product => product.id === items.id);
            if (index !==-1) {
                this.cartItems[index].quantity +=1;
                toast.success("Your item has been updated", {
                    timeout:2000
                });
            }
        },
        decrementQ(items) {
            let index = this.cartItems.findIndex(product => product.id === items.id);
            if (index !==-1) {
                this.cartItems[index].quantity -=1;
                if(this.cartItems[index].quantity === 0) {
                    this.cartItems = this.cartItems.filter(product => product.id === items.id)
                }
                toast.success("Your item has been updated", {
                    timeout:2000
                });
            } 
        },
        removeItems(items) {
            this.cartItems = this.cartItems.filter(product => product.id !== items.id)
            toast.success("Your item has been removed", {
                timeout:2000
            });
        }
    }

})

