<template>
    <main id="authorization-page">
        <section class="login">
            <div class="container pt-5">
                <div class="row g-0 border">
                    <div class="col-lg-5 left">
                        <img :src="logokiut" alt="kiut"  class="logokiut"/>
                        <h2>Kimyo International <br> University in Tashkent</h2>
                    </div>
                    <div class="col-lg-5">
                        <form>
                            <div class="form-row top__inut">
                                <div class="offset-1 col-lg-10">
                                    <input type="text" placeholder="ID">
                                </div>
                            </div>
                        </form>
                        <form>
                            <div class="form-row bottom__input">
                                <div class="offset-1 col-lg-10">
                                    <input type="password" placeholder="Pasport">
                                </div>
                            </div>
                        </form>
                        
                            <div class="form-row ">
                                <div class="offset-1 col-lg-10">
                                    <b-button class="btn btn1">Login</b-button>
                                </div>
                            </div>
                        0k                    </div>
                </div>
            </div>
        </section>
    </main>
</template>


<script setup>
import { ref } from 'vue'
import logokiut from '../assets/images/kiut_logo.png'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
</script>





<style  lang="scss" scoped> 
.logokiut{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2.5rem;
    width: 12.5rem;
    height: 14.625rem;
}
.left {
     background-color: #4499D7;
 }

 h2 {
     color:white;
     font-size: 24px;
     text-align: center;
 }

 .top__inut{
    padding-top: 120px;
 }

 .bottom__input{
    margin-top: 20px;
 }

 .btn1{
    color: red;
 }
</style>