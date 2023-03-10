<template>
  <div class="container" id="App" style="bac">
    <br>
    <div class="row">
      <h1 class="text-white">My Menu</h1>
      <div class="card" style="width: 20rem; background-color: #FFF8EA;" v-for="menu in foodmenu">
        <div class="card-body">
          <h4 class="card-title">{{ menu.nameTH }}</h4>
          <h5>{{ menu.nameEng }}</h5>
          <h6>ราคา: {{ menu.price }} บาท</h6>
          <h6>{{ menu.detial }}</h6>
        </div>
      </div>
    </div>
    <br>

    <div v-for="menu in foodmenu">
      <input v-model="menu.nameTH" type="text">
      <input v-model="menu.nameEng" type="text">
      <input v-model="menu.price" type="text">
      <input v-model="menu.detial" type="text">

      <button class="btn btn-success" @click="updateMenu(menu)">UPDATE</button>
      <button class="btn btn-danger" @click="deleteMenu(menu.id)">DELETE</button>
    </div>
    <br>

    <div class="nameTH">
      <input type="text" placeholder="" class="form-control" ref="t">
    </div>

    <div class="nameEng">
      <input type="text" placeholder="" class="form-control" ref="e">
    </div>
    <div class="price">
      <input type="number" placeholder="" class="form-control" ref="p">
    </div>
    <div class="detial">
      <input type="text" placeholder="" class="form-control" ref="d">
    </div>

    <button class="btn btn-dark" @click="addMenu">ADD</button>

  </div>
</template>

<script >
import { ref } from "vue"
import "../firebase";
import {
  addDoc, collection, getFirestore, doc, deleteDoc, query, onSnapshot, setDoc
} from "firebase/firestore";

const db = getFirestore();

export default {
  name: "App",
  methods: {
    addMenu: function () {
      addDoc(collection(db, "foodmenu"), {
        nameTH: this.$refs.t.value,
        nameEng: this.$refs.e.value,
        price: this.$refs.p.value,
        detial: this.$refs.d.value
      });
    },
    updateMenu: function (menu) {
      setDoc(doc(db, "foodmenu", menu.id), {
        nameTH: menu.nameTH,
        nameEng: menu.nameEng,
        price: menu.price,
        detial: menu.detial,
      })
    },
    deleteMenu: function (id) {
      deleteDoc(doc(db, "foodmenu", id))
    }
  },
  data: () => {
    return {
      foodmenu: {
        nameTH: "",
        nameEng: "",
        price: 0,
        detial: "",
        key: "",
      },
      foodmenu: ref([])
    }
  },
  mounted() {
    const latestQuery = query(collection(db, "foodmenu"));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.foodmenu = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          nameTH: doc.data().nameTH,
          nameEng: doc.data().nameEng,
          price: doc.data().price,
          detial: doc.data().detial,
        }
      });
    });
  }
}
</script>

<style>
#app {
  font-family: 'Kanit', sans-serif;
  background-color: #9E7676;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>