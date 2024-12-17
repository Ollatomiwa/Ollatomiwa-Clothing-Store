<script setup>
import { useCart } from '../stores/useCart';

const data = useCart();
</script>

<template>
    <div class="row my-4">
        <div class="col md-4">
            <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <body>
                        <tr v-for="items in data.cartItems" :key="items.id" >
                            <td>{{ items.id }}</td>
                            <td>
                                <img :src="itemss.image"
                                     width="60"
                                     height="60"
                                     class="img-fluid rounded"
                                     alt=""
                                    >
                            </td>
                            <td>
                                {{ items.name}}
                            </td>
                            <td>
                                {{items.quantity}}
                            </td>
                            <td>
                                {{ items.price }}
                            </td>
                            <td>
                                {{items. price * items.quantity }}
                            </td>
                            <td>

                            </td>
                        </tr>
                       <tr>
                        <th class="text-center" colspan="3">
                                Total
                            </th>
                            <td class="tect-center" colspan="3">
                                ${{ data.cartItems.reduce ((acc, items)=> acc+=items.price * items.quantity, 0 ) }}
                            </td>
                       </tr>
                    </body>
                </table>

            </div>
        </div>
    </div>
</template>