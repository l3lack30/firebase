<template>
  <nav style="background: #594545">
    <div class="nav-s"><RouterLink to="/">Home</RouterLink></div>
    <div class="nav-s"><RouterLink to="/feed" v-if="LoggedIn">Menu</RouterLink></div>
    <div class="nav-s"><RouterLink to="/login">Login</RouterLink></div>
    <div class="nav-s"><RouterLink to="/register">Register</RouterLink></div>
    <button @click="Logout" v-if="LoggedIn" class="btn btn-secondary" >LogOut</button>
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
      LoggedIn.value = true;
    } else {
      LoggedIn.value = false;
    }
  });
});


const Logout = () => {
  signOut(auth).then(() => {
    router.push("/")
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
  padding: 15px 20px;
  position: relative;
  text-align: right;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}
.nav-s a {
  color: inherit;
  text-decoration: none;
}
</style>