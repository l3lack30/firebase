<template>
    <div>
        Email : <input type="text" placeholder="email" v-model="email" >
        Password : <input type="password" name="" id="" v-model="pwd" >
        <div>
            <button @click="$event => login()">Login</button>
            <button @click="$event => register()">Register</button>
            <button @click="$event => googlelogin()">Google Login</button>
        </div>
        <div>
            ชื่อเมนูไทย <input type="text" name="" id="" v-model="menu.nameTH">
            ชื่อเมนู ENG <input type="text" name="" id="" v-model="menu.nameEng">
            ราคา <input type="number" v-model="menu.price">
            รายละเอียด <input type="text" name="" id="" v-model="menu.detail">

            <button @click="$event => addUserData()">เพิ่มข้อมูล</button>
            <button @click="$event => showMenu()">แสดงเมนู</button>
        </div>

        <div>
            <table>
                <tr>
                    <td>ชื่อ</td>
                    <td>Eng</td>
                    <td>ราคา</td>
                    <td>รายละเอียด</td>
                </tr>
                <tr v-for = "(menuItem, index) in allMenu" :key="index">
                    <td>{{ menuItem.nameTH }}</td>
                    <td>{{ menuItem.nameEng }}</td>
                    <td>{{ menuItem.price }}</td>
                    <td>{{ menuItem.detail }}</td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script setup>
    import {ref} from "vue";
    import { useRouter } from "vue-router";
    import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
    
    import { db } from "@/firebase"

    import { collection, addDoc, getDoc  } from "firebase/firestore";

    const router = useRouter();
    const email = ref("");
    const pwd = ref("");
    const menu = ref ({ nameTH:"", nameEng:"", price:0, detail:"" })
    
    
    async function addUserData() {
        try {
            const docRef = await addDoc(collection(db, "foodmenu"), menu.value);
            console.log("Doucument written with ID: ", docRef.id)
        }catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    async function showMenu() {
        const querySnapshot = await getDoc(collection(db, "foodmenu"));
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        });
        allMenu.value.push()
    }

    function login() {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, pwd.value)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User" + user);
        router.push("/About");
        // ...
         })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        });
    }

    
</script>

<style>

</style>