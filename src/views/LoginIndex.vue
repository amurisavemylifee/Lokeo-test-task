<template>
  <div class="login-box">
    <h1 class="login-box-title">Авторизация</h1>
    <hr />
    <form @submit.prevent="submitHandler" class="login-box-content">
      <app-input
        placeholder="+7 999 99 99"
        label="Телефон"
        v-model="phone"
      ></app-input>
      <app-input label="Пароль" type="password" v-model="password"></app-input>
      <app-button fullWidth>Войти</app-button>
    </form>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue";
import AppInput from "../components/AppInput.vue";
import { useLoginValidation } from "../use/useLoginValidation";
import { useModalStore } from "../store/useModalStore";
import { useLoginStore } from "../store/useLoginStore";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    AppButton,
    AppInput,
  },
  setup() {
    const { meta, errors, password, phone, resetForm } = useLoginValidation();
    const router = useRouter();
    const loginStore = useLoginStore();
    const modalStore = useModalStore();
    async function submitHandler() {
      if (meta.value.valid) {
        let responseData;
        try {
          responseData = await loginStore.loginRequest(
            phone.value,
            password.value
          );
        } catch (e) {
          modalStore.createModal(e);
          resetForm();
          return;
        }
        loginStore.setTokens(responseData);
        modalStore.createModal("Вы успешно авторизовались!")
        router.push("/passes");
      } else {
        modalStore.createModal(Object.values(errors.value)[0]);
      }
    }
    return {
      submitHandler,
      meta,
      errors,
      password,
      phone,
    };
  },
};
</script>

<style lang = "scss" scoped>
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 480px;
  background-color: #ffffff;
  border-radius: 26px;
  &-title {
    text-align: center;
    font-weight: 900;
    font-size: 28px;
    margin-bottom: 10px;
  }
  hr {
    height: 1px;
    background-color: black;
    margin-bottom: 10px;
  }
  .input-box:last-of-type {
    margin-bottom: 25px;
  }
  .input-box + .input-box {
    margin-top: 15px;
  }
  span {
    display: block;
    margin-bottom: 5px;
  }
}
</style>