<template>
    <div class="main">
        <Slide></Slide>
        <br />
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card">
                    <a href="https://www.wongnai.com/recipes/shrimp-gyoza-with-pad-thai-sauce">
                    <img src="https://img.wongnai.com/p/1920x0/2018/12/17/a811b1594a054ce4be0a4d3550d0c519.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <a href="https://www.wongnai.com/recipes/sausage-spaghetti-with-spicy-minced-pork">
                    <img src="https://img.wongnai.com/p/1920x0/2018/08/16/52e4bd503ab54ff493fa6e8fbcd6cbb0.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <a href="https://www.wongnai.com/recipes/rice-roll-chilli-kapi-paste">
                    <img src="https://img.wongnai.com/p/1920x0/2017/05/06/d0c3cccce4094be998259ebddd23b347.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <a href="https://www.wongnai.com/recipes/rice-roll-chilli-kapi-paste">
                    <img src="https://img.wongnai.com/p/1920x0/2017/10/28/6ed1b1cc50224fd29ad5de19ee2e3d15.jpg" class="card-img-top" alt="..." /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Slide from "../components/Slide.vue";

export default {
    name: "Home",
    components: {
        Slide,
    },
};
</script>

<style>
.main {
    background-color: #815B5B;
}


.text{
    margin-top: 5px;
    text-align: center;
    font-size: 16px;
}

.col {
    margin-bottom: 20px;
}
</style>