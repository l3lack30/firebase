<template>
  <nav style="background: #594545">
    <div class="nav-s"><RouterLink to="/">Home</RouterLink></div>
    <div class="nav-s"><RouterLink to="/menu" v-if="LoggedIn">Menu</RouterLink></div>
    <div class="nav-s" @click ="Logout" v-if="LoggedIn">LogOut</div>
    <div class="nav-s"><RouterLink to="/login" v-if="LoggedIn == null">Login</RouterLink></div>
    <div class="nav-s"><RouterLink to="/register" v-if="LoggedIn == null">Register</RouterLink></div>
    
    
    
  </nav>
    <RouterView />
</template>

<script setup>
import "../firebase";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import { RouterLink, RouterView } from "vue-router";

const router = useRouter();
const LoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      LoggedIn.value = user;
    } else {
      LoggedIn.value = null;
    }
  });
});


const Logout = () => {
  signOut(auth).then(() => {
    router.push("/")
    alert("LogOut!")
  })
};

</script>

<style>
nav {
  display: flex;
  align-items: right;
  justify-content: right;
}
.nav-s {
  color: #FFF;
  margin: 15px;
  position: relative;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  cursor:pointer;
}
.nav-s a {
  color: inherit;
  text-decoration: none;
}
</style>