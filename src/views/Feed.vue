<template>
  <div class="vh-auto" style="background: #9E7676">
    <div class="container">
      <div class="row">
        <h1 class="mymenu">My Menu</h1>
        <div class="card" style="width: 20rem;" v-for="menu in foodmenu">
          <div class="card-body">
            <h4 class="card-title">{{ menu.nameTH }}</h4>
            <h5>{{ menu.nameEng }}</h5>
            <h6>ราคา: {{ menu.price }} บาท</h6>
            <h6>{{ menu.detial }}</h6>
          </div>
        </div>

        <div class="mymenu">
          <div>
            <h2>Add Menu</h2>
          </div>
          <div>
            <p><input type="text" placeholder="ชื่อภาษาไทย" class="form-control" ref="t"></p>
            <p><input type="text" placeholder="ชื่อภาฺษาอังกฤษ" class="form-control" ref="e"></p>
            <p><input type="number" placeholder="ราคา" class="form-control" ref="p"></p>
            <p><input type="text" placeholder="รายละเอียด" class="form-control" ref="d"></p>
          </div>
          <button class="btn btn-dark" @click="addMenu">ADD</button>
        </div>

        <div class="add">
          <h2 class="mymenu">Update/Delete</h2>
          <div v-for="menu in foodmenu">
            <input v-model="menu.nameTH" type="text">
            <input v-model="menu.nameEng" type="text">
            <input v-model="menu.price" type="text">
            <input v-model="menu.detial" type="text">
            <button class="btn btn-primary" @click="updateMenu(menu)">UPDATE</button>
            <button class="btn btn-danger" @click="deleteMenu(menu.id)">DELETE</button>
          </div>
        </div>

      </div>
    </div>
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
    onSnapshot(latestQuery, (snapshot) => {
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.mymenu {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #FFF;
}

.card {
  margin: 5px;
}

.add {
  margin-bottom: 50px;
}
</style>