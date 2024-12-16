<script setup>
import { ref } from 'vue';

import WomenImage1 from '../assets/img/cf.jpg';
import WomenShort from '../assets/img/shortldies.jpg';
import WomenShort2 from '../assets/img/shortladies2.jpg';
import WomenShorts from '../assets/img/shortladies.jpg';

import womenTop from '../assets/img/womentop.jpg';
import womenTops from '../assets/img/womentop2.jpg';
import womenTop1 from '../assets/img/womentop3.jpg';

import womenshoe from '../assets/img/ladiesshoes.jpg';
import womenshoes from '../assets/img/shoesladies.jpg';
import womenshoe1 from '../assets/img/boots.jpg';

const shopping = ref(WomenImage1);
const short = ref(WomenShort);
const short1 = ref(WomenShort2);
const shorts = ref(WomenShorts);


const Top = ref(womenTop);
const Tops = ref(womenTops);
const Top1 = ref(womenTop1);

const shoe = ref(womenshoe);
const shoess = ref(womenshoes);
const boots = ref(womenshoe1);

</script>

<template>
   
    <section>
        
        <div class="container-lg">
            <div class="row justify-content-center align-items-center  ">
                <div  class=" col-md-5 text-align-center">
                  
                        <div class="display-2 text-secondary"> 
                         </div>   
                 </div>
                <div class="col-md-12 text-center  d-md-block" >
                    <img class="img-fluid " :src="shopping" alt="clothing store">
                                      
                </div>             
            </div>           
        </div>      
    </section>
    <section id="shorts" class=" mt-1">
        <div class="container-lg">
            <div class="text-center text-secondary">
                <h2>Ladies Collection(Shorts)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="short" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$399.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        
                        <div class="card-body text-center py-4 text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="short1" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$399.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="shorts" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$299.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      
    </section>
    <section id="tops" class=" mt-5">
        <div class="container-lg">
            <div class="text-center text-secondary">
                <h2>Ladies Collection(Tops)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="Top" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$499.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        
                        <div class="card-body text-center py-4 text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="Tops" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$439.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="Top1" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$439.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
            </div>
            </div>
        </div>
      
    </section>
    <section id="shoes" class=" mt-5">
        <div class="container-lg">
            <div class="text-center text-secondary">
                <h2>Ladies Collection(Shoes)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle">Ladies Collection (10% Discount closing soon)</h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="shoe" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$399.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        
                        <div class="card-body text-center py-4 text-secondary" >
                            <h4 class="card-tittle"> </h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="shoess" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$499.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-
                            3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="boots" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$349.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
    body{
            color: white;
            background-color: white;
            
        }
        section{
            padding: 60px;
            
        }
</style>

