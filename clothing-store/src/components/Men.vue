<script setup>
import { ref } from 'vue';

import MenImage1 from '../assets/img/menshopping2.jpg';
import MenShort1 from '../assets/img/mensshort.jpg';
import MenShort2 from '../assets/img/menshort2.jpg';

import menTop from '../assets/img/mentop.jpg';
import menTops from '../assets/img/mentop2.jpg';
import menTop1 from '../assets/img/mentop3.jpg';

import menshoe from '../assets/img/shoes.jpg';
import menshoes from '../assets/img/shoes2.jpeg';
import menshoe1 from '../assets/img/shoes3.jpg';

const menshopping2 = ref(MenImage1);
const menshort = ref(MenShort1);
const menshort1 = ref(MenShort2);


const Top = ref(menTop);
const Tops = ref(menTops);
const Top1 = ref(menTop1);

const shoe = ref(menshoe);
const shoess = ref(menshoes);
const shoes1 = ref(menshoe1);

</script>

<template>
   
    <section>
        
        <div class="container-lg">
            <div class="row justify-content-center align-items-center  ">
                <div  class=" col-md-5 text-align-center">
                    
                        <div class="display-2 text-secondary"> 
                         </div>   
                 </div>
                <div class="col-md-12 text-center d-md-block" >
                    <img class="img-fluid " :src="menshopping2" alt="clothing store">
                                      
                </div>             
            </div>           
        </div>      
    </section>
    <section id="shorts" class=" mt-1">
        <div class="container-lg">
            <div class="text-center text-secondary">
                <h2>Mens Collection(Shorts)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="menshort" alt="shorts">
                                                  
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
                                <img class="img-fluid " :src="menshort" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$499.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"> </h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="menshort1" alt="shorts">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$499.99</p>
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
                <h2>Mens Collection(Tops)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"> </h4>
                            <div class="col-md-12 text-center d-md-block" >
                                <img class="img-fluid " :src="Top" alt="tops">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$179.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        
                        <div class="card-body text-center py-4 text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="Top1" alt="tops">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$239.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="Tops" alt="tops">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$349.99</p>
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
                <h2>Mens Collection(Shoes)</h2>
                <p class="lead text-secondary" > Happy Shopping! </p>
            </div>

            <div class="row align-items-center justify-content-center g-0 ">
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="shoe" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$169.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        
                        <div class="card-body text-center py-4 text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="shoess" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$154.99</p>
                            <a href="#" class="btn btn-outline-primary btn-lg mt-3">Buy Now</a>
                        </div>
                    </div>
                </div>  
                <div class="col-12 col-lg-4 col-xl-3">
                    <div class="card border-0">
                        <div class="card-body text-center py-4  text-secondary" >
                            <h4 class="card-tittle"></h4>
                            <div class="col-md-12 text-center  d-md-block" >
                                <img class="img-fluid " :src="shoes1" alt="shoes">
                                                  
                            </div>
                            <p class="display-5 my-4 text-primary fw-bold ">$139.99</p>
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