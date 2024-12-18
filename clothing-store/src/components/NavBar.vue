<script setup>

</script>

<template>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-black py-1">
        <div class="container-xxl">
            <a href="#intro" class="navbar-brand" >
                <i class="bi bi-book-half"></i>
                <span class="fw-bold text-light">
                  OLLA CLOTHING STORE
                </span>
            </a>
            <!--toggle for mobile nav-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
             <!--Navbar links-->
               <div class="collapse navbar-collapse justify-content-around align-center" 
                id="navbarNavDropdown">
                    <ul class="navbar-nav">
                     <li class="nav-item ">
                      <router-link class="nav-link" to="/home"><p class="text-light">Kids Collection</p>
                      </router-link>
                     </li>
                     <li class="nav-item">
                      <router-link class="nav-link" to="/men"><p class="text-light">Mens Collection</p> </router-link>
                     </li>
                     <li class="nav-item ">
                         <router-link class="nav-link" to="/ladies"><p class="text-light">Ladies Collection</p></router-link>
                     </li>
                     
                     </ul>
      
                </div>
         </div>        
    </nav> 
</template>