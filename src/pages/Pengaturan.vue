<template>
  <q-page class="bg-grey-1 column no-padding geser-semua">
    <center><p class="text-body1 teks-ubah">Ubah Password Akun Anda</p></center>
    <div class="q-gutter-md framelogin no-padding">
      <center>
        <q-input
          class="ubahpassword"
          dense
          v-model="pwdlama"
          filled
          :type="isPwd ? 'password' : 'text'"
          label="Masukan Password Lama"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-input
          class="ubahpassword"
          dense
          v-model="pwdbaru"
          filled
          :type="isPwd2 ? 'password' : 'text'"
          label="Masukan Password Baru Anda"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>

        <q-input
          class="ubahpassword"
          dense
          v-model="pwdbaru2"
          filled
          :type="isPwd3 ? 'password' : 'text'"
          label="Ulangi Password Baru"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd3 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd3 = !isPwd3"
            />
          </template>
        </q-input>
        <q-btn
          class="submit"
          :loading="loading1"
          color="primary"
          @click="simulateProgress(1)"
          label="Submit"
        />
      </center>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      loading1: false,
      pwdlama: "",
      pwdbaru: "",
      pwdbaru2: "",
      isPwd: true,
      isPwd2: true,
      isPwd3: true,
    };
  },
  methods: {
    simulateProgress(number) {
      // we set loading state
      this[`loading${number}`] = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this[`loading${number}`] = false;
        this.$q.notify({
          message: "Password Berhasil Diganti",
          color: "primary",
        })
      }, 3000);
    },
  },
};
</script>
<style lang="scss" scoped>
.ubahpassword {
  margin-bottom: 10px;
  width: 250px;
}
.submit {
  width: 250px;
}
.framelogin {
  padding: 0;
  padding-top: 5%;
  margin: 0;
}
.no-padding {
  padding: 0;
}
.teks-ubah {
  opacity: 0.7;
  margin-top: 40px;
}
.geser-semua{
  margin-left: -5%;
}
</style>