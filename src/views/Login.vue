<template>
    <div class="vh-100 d-flex justify-content-center align-items-center" style="background: #9E7676">
        <div class="card text-center w-25">
            <div class="card-body" style="background: #FFF8EA">
                <h2>LOGIN</h2><br>
                <label for="email" class="form-label">Email</label>
                    <p><input class="form-control" type="text" placeholder="Email" v-model="email" /></p>
                <label for="password" class="form-label">Password</label>
                    <p><input class="form-control" type="password" placeholder="Password" v-model="password" /></p>
                    <p v-if="errMsg">{{ errMsg }}</p>
                    <p><button class="btn btn-secondary active" @click="login">Login</button></p>
                    <p><button class="btn btn-secondary active" @click="signInWithGoogle">Sign inWithGoogle</button></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"
import "../firebase";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth();
const email = ref("");
const password = ref("");
const errMsg = ref()
const router = useRouter();

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            const user = data.user;
            console.log("LoggedIn" + user);
            console.log(auth.currentUser);
            router.push("/menu")
            alert("LoggedIn")
        })
        .catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case "auth/invalid-email":
                    errMsg.value = "Invalid Email";
                    break;
                case "auth/user-not-found":
                    errMsg.value = "No account with that email was found";
                    break;
                case "auth/wrong-password":
                    errMsg.value = "Incorrect Password";
                    break;
                default:
                    errMsg.value = "Email or Password was Incorrect";
                    break;
            }
        });
};

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            console.log(result.user);
            router.push("/menu");
        })
        .catch((error) => {
        })
};
</script>