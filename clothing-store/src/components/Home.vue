<script setup>

</script>

<template>
     <nav class="navbar navbar-expand-md navbar-light bg-black py-1">
        <div class="container-xxl">
            <a href="#intro" class="navbar-brand" >
                <i class="bi bi-book-half"></i>
                <span class="fw-bold text-light">
                  OLLA CLOTHING STORE
                </span>
            </a>
            <!--toggle for mobile nav-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <!--Navbar links-->
               <div class="collapse-navbar-collapse justify-content-end align-center" 
                id="main-nav">
                    <ul class="navbar-nav">
                     <li class="nav-item ">
                      <a class="nav-link" href="Kid.html"  target="_blank"><p class="text-light">Kids Collection</p></a>
                     </li>
                     <li class="nav-item">
                      <a class="nav-link" href="mens.html"  target="_blank"><p class="text-light">Mens Collection</p> </a>
                     </li>
                     <li class="nav-item ">
                         <a class="nav-link " href="Ladies.html"  target="_blank"><p class="text-light">Ladies Collection</p></a>
                     </li>
                     
                     </ul>
      
                </div>
         </div>        
    </nav> 

    <section id="Intro">
        
        <div class="container-lg">
            <div class="row justify-content-center align-items-center  ">
                <div  class=" col-md-5 text-align-center">
                    
                        <div class="display-2 text-secondary"></div>   
                 </div>
                           
            </div>           
        </div>      
    </section>
    <article>
        <div class="text-center">
            <button type="button" class="btn btn-danger btn-lg  text-white px-5  align-item-center ">Get Started</button>
        </div>
        
    </article>
</template>