<template>
    <div class="container">
        <div class="navigation">
            <ul>
                <li>
                    <a href="#">
                         <img src="../assets/logo.png">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
                        <span class="title">Panel de Control</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="globe-outline"></ion-icon></span>
                        <span class="title">Ingreso IP</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="print-outline"></ion-icon></span>
                        <span class="title">Impresoras</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="flag-outline"></ion-icon></span>
                        <span class="title">opcion 3</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="flag-outline"></ion-icon></span>
                        <span class="title">opcion 4</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="settings-outline"></ion-icon></span>
                        <span class="title">Opciones</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><ion-icon name="log-in-outline"></ion-icon></span>
                        <span class="title">Salir</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
}

.container{
    --blue: #287bff;
    --white: #fff;
    --grey: #f5f5f5;
    --black1: #222;
    --black2: #999;
    position: relative;
    width: 100%;
}

.navigation{
    position: fixed;
    width: 300px;
    height: 100%;
    background: var(--blue);
    border-left: 10px solid var(--blue);
    transition: all 0.5s;
    overflow: hidden;
}

.navigation ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.navigation ul li{
    position: relative;
    width: 100%;
    list-style: none;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
}

.navigation ul li:hover,
.navigation ul li.hovered
{
    background: var(--white);
}

.navigation ul li:nth-child(1){
  margin-bottom: 40px;
  pointer-events: none;
}

.navigation ul li a{
    position: relative;
    display: block;
    width: 100%;
    display: flex;
    text-decoration: none;
    color: var(--white);
}

.navigation ul li a img{
    width: 200px;
    height: 150px;
    margin: 20px auto;
    border-radius: 10px;
}

.navigation ul li:hover a,
.navigation ul li.hovered a
{
    color: var(--blue);
}

.navigation ul li a .icon{
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 70px;
    text-align: center;
}

.navigation ul li a .icon ion-icon{
    font-size: 1.75em;
}

.navigation ul li a .title{
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    text-align: start;
    white-space: nowrap;
}

/* Curvar los border externos del hover */
.navigation ul li:hover a::before,
.navigation ul li.hovered a::before
{
    content: '';
    position: absolute;
    right: 0;
    top: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50px;
    box-shadow: 35px 35px 0 10px var(--white);
    pointer-events: none;
}

.navigation ul li:hover a::after,
.navigation ul li.hovered a::after
{
    content: '';
    position: absolute;
    right: 0;
    bottom: -50px;
    width: 50px;
    height: 50px;
    background: transparent;
    border-radius: 50px;
    box-shadow: 35px -35px 0 10px var(--white);
    pointer-events: none;
}
</style>