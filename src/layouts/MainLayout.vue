<template>
  <q-layout v-on="dimuat" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title v-if="!kepala">
          {{ halaman }}
        </q-toolbar-title>
        <q-toolbar-title v-if="kepala">
          <!-- cuma buat geser ke kanan -->
        </q-toolbar-title>
        <div side>
          <q-icon
            :name="kepala ? 'close' : 'visibility'"
            class="cursor-pointer"
            @click="kepala = !kepala"
          />
        </div>
      </q-toolbar>

      <div v-if="kepala" class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h5">{{ halaman }}</div>
        <div class="text-subtittle1">{{ hariSekarang }}</div>
        <q-img
          transition="scale"
          src="../statics/rektorat.jpg"
          class="header-image absolute-top"
        />
      </div>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      :width="220"
      :breakpoint="600"
    >
      <q-list>
        <q-img src="../statics/color1.jpg" style="height: 167px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../statics/ayub.jpg" />
            </q-avatar>
            <div class="text-weight-bold">{{ namaMahasiswa }}</div>
            <div>@{{ nimMahasiswa }}</div>
          </div>
        </q-img>

        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section class="sl-text"> Summary </q-item-section>
        </q-item>

        <hr />

        <q-item to="/Farmer" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="face" />
          </q-item-section>
          <q-item-section class="sl-text"> Farmer </q-item-section>
        </q-item>

        <q-item to="/garden" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="compost" />
          </q-item-section>
          <q-item-section class="sl-text"> Garden </q-item-section>
        </q-item>

        <q-item to="/polygon" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="mode_of_travel" />
          </q-item-section>
          <q-item-section class="sl-text"> Polygon </q-item-section>
        </q-item>
        <hr />
        <q-item to="/training" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="diversity_3" />
          </q-item-section>
          <q-item-section class="sl-text"> Training </q-item-section>
        </q-item>

        <q-item to="/coaching" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="agriculture" />
          </q-item-section>
          <q-item-section class="sl-text"> Coaching </q-item-section>
        </q-item>

        <hr />

        <q-item to="/pengaturan" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section class="sl-text"> Pengaturan </q-item-section>
        </q-item>

        <q-item @click="keluar" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="logout" />
          </q-item-section>
          <q-item-section class="sl-text"> Keluar </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { date } from "quasar";
export default defineComponent({
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  data() {
    return {
      // leftDrawerOpen: false,
      kepala: true,
      masuk: false,
      halaman: "Lock Payment Koltiva",
      namaMahasiswa: "Ayub Gilbert Dananjaya",
      nimMahasiswa: null,
    };
  },
  computed: {
    hariSekarang() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, "D MMMM YYYY");
    },
    dimuat() {
      return this.logindulu();
    },
  },
  methods: {
    keluar: function () {
      this.$q
        .dialog({
          title: "Keluar Aplikasi",
          message: "Anda Yakin Ingin Keluar Dari Aplikasi?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.$q.loading.show({
            message: "Sedang Mengeluarkan Anda Dari Sistem..",
          });
          // hiding in 2.5s
          this.timer = setTimeout(() => {
            this.$q.loading.hide();
            this.timer = void 0;
            localStorage.clear();
            this.$router.push("/login");
          }, 2500);
        });
    },
    logindulu: function () {
      const idnim = localStorage.getItem("nimGue");
      if (idnim != null) {
        this.nimMahasiswa = idnim;
      } else {
        this.$router.push("/login");
      }
    },
  },
});
</script>
