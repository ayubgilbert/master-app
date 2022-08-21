<template>
  <div class="fullscreen text-center q-pa-md flex flex-center">
    <center>
      <img src="../statics/Koltiva.png" />
      <q-input
        @keyup.enter="simulateProgress(1)"
        class="ubahpassword"
        v-model="usernim"
        filled
        type="tel"
        label="Username"
      >
      </q-input>

      <q-input
        @keyup.enter="simulateProgress(1)"
        class="ubahpassword"
        v-model="passwordnya"
        filled
        :type="kelihatan ? 'password' : 'text'"
        label="Password"
      >
        <template v-slot:append>
          <q-icon
            :name="kelihatan ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="kelihatan = !kelihatan"
          />
        </template>
      </q-input>

      <q-btn
        class="submit"
        :loading="loading1"
        color="primary"
        @click="simulateProgress(1)"
        label="Masuk"
      />
    </center>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      loading1: false,
      usernim: "",
      passwordnya: "",
      kelihatan: true,
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
        if (this.usernim == 5235134407 && this.passwordnya == "ayubgilbert") {
          this.$q.notify({
            message: "Berhasil Login",
            color: "primary",
          });
          localStorage.setItem("nimGue", this.usernim);
          this.$router.push("/");
        } else if (this.usernim == 5 && this.passwordnya == "a") {
          this.$q.notify({
            message: "Berhasil Login",
            color: "primary",
          });
          localStorage.setItem("nimGue", this.usernim);
          this.$router.push("/");
        } else if (
          this.usernim == "koltiva" &&
          this.passwordnya == "ayubgilbert"
        ) {
          this.$q.notify({
            message: "Berhasil Login",
            color: "primary",
          });
          localStorage.setItem("nimGue", this.usernim);
          this.$router.push("/");
        } else if (
          this.usernim != 5235134407 &&
          this.passwordnya == "ayubgilbert"
        ) {
          this.$q.notify({
            message: "Username Salah",
            color: "red",
          });
        } else if (
          this.usernim == 5235134407 &&
          this.passwordnya != "ayubgilbert"
        ) {
          this.$q.notify({
            message: "Pasword Salah",
            color: "red",
          });
        } else {
          this.$q.notify({
            message: "Gagal Masuk",
            color: "red",
          });
        }
      }, 3000);
    },
  },
};
</script>
