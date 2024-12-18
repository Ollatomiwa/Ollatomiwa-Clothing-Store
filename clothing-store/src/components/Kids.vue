<script setup>
import { ref } from 'vue';

import  { useCart } from '../stores/useCart'; 

const data = useCart();

const props = defineProps ({
    kidsTop: {
        type: Object,
        required: true,
    },
    kidsShort: {
        type: Object,
        required: true,
    },
    kidsShoe: {
        type: Object,
        required: true,
    },
})

import KidImage1 from '../assets/img/kf.jpg';
import KidsShort1 from '../assets/img/Kids-Shorts-3pcs.jpg';
import KidShort2 from '../assets/img/Kids-short.jpg';
import Kidsshort from '../assets/img/kidsshorts.jpg';

import KidTop from '../assets/img/kidtop.jpg';
import KidTops from '../assets/img/kidstop.jpg';
import KidTop1 from '../assets/img/kidtop2.jpg';

import kidshoe from '../assets/img/kidshoe.jpg';
import kidshoes from '../assets/img/kidsshoes.png';
import kidshoe1 from '../assets/img/kidsshoes2.jpg';

const kidimg = ref(KidImage1);
const kidshort = ref(KidsShort1);
const kidshort1 = ref(KidShort2);
const kidshort2 = ref(Kidsshort);


const Top = ref(KidTop);
const Tops = ref(KidTops);
const Top1 = ref(KidTop1);

const shoe = ref(kidshoe);
const shoess = ref(kidshoes);
const shoes1 = ref(kidshoe1);

</script>

<template>
        
        <div class="container-lg">
            <div class="row justify-content-center align-items-center  ">
                <div  class=" col-md-5 text-align-center">
                    
                        <div class="display-2 text-secondary"> 
                         </div>   
                 </div>
                <div class="col-md-12 text-center  d-md-block" >
                    <img class="img-fluid " :src="kidimg" alt="clothing store">
                                      
                </div>             
            </div>           
        </div>      
        <div class="container-lg mt-1">
            <div class="text-center text-secondary">
                <h2>Kids Collection(Shorts)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle">{{KidsShort.name}}</h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="kidshort" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">{{kidsShort.price}}</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    
        <div class="container-lg mt-5">
            <div class="text-center text-secondary">
                <h2>Kids Collection(Tops)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle">{{kidsTop.name}}</h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="Tops" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">{{product.kidsTop.price}}</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
        </div>
        </div>
      
        <div class="container-lg mt-5">
            <div class="text-center text-secondary">
                <h2>Kids Collection(Shoes)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"> {{product.kidsShoe.name}}</h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="shoess" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">{{kidsShoe.price}}</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
        </div>
      </div>

</template>
<style scoped>

</style>