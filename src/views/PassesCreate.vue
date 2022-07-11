<template>
  <app-button @click="$router.push('/passes')">Отменить</app-button>
  <app-button @click="saveHandler" :disabled="ID === ''">Сохранить</app-button>
  <div class="pass-info">
    <div class="dashed-block">
      <h3>Ваш пропуск</h3>
      <div class="info-item">
        КПП<span v-for="item in checkpoints">{{ item }}</span>
      </div>
      <div class="info-item">
        Поселок и участок<span>{{ region }}</span>
      </div>
      <div class="info-item">
        Лицо<span>{{ person }}</span>
      </div>
      <div class="info-item">
        Автомобиль<span>{{ transport }}</span>
      </div>
      <div class="info-item">
        Пропуск<span
          >Тип проезжающего: {{ typeOfPassing }} Тип пропуска:
          {{ typeOfPass }} Срочность:
          {{ urgency }}
          Продукт, по которому предоставляется пропуск:
          {{ product }} Идетификатор: {{ ID }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import AppButton from "../components/AppButton.vue";
import { usePassesStore } from "../store/usePassesStore";
import { useRouter } from "vue-router";
export default {
  components: {
    AppButton,
  },
  setup() {
    const router = useRouter();
    const { createPass } = usePassesStore();
    const checkpoints = ref(["КПП 8 Меньшино"]);
    const region = ref("Меньшино");
    const person = ref("Игорь Васильевич Иванов");
    const transport = ref("Т 400 ТХ 71");
    const typeOfPassing = ref("Житель");
    const typeOfPass = ref("ГРЗ");
    const urgency = ref("Постоянный");
    const product = ref("Обслуживание участков");
    const ID = ref("");
    function saveHandler() {
      createPass({
        checkpoints,
        person,
        transport,
        typeOfPass,
        ID,
      });
      router.push("/passes");
    }

    function idGenerator() {
      let nums = "0123456789";
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let password = "";
      for (let i = 0; i <= 2; i++) {
        let randomNumber = Math.floor(Math.random() * nums.length);
        password += nums.substring(randomNumber, randomNumber + 1);
      }
      for (let i = 0; i <= 2; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      for (let i = 0; i <= 1; i++) {
        let randomNumber = Math.floor(Math.random() * nums.length);
        password += nums.substring(randomNumber, randomNumber + 1);
      }
      ID.value = password;
    }
    onMounted(() => {
      setTimeout(() => {
        idGenerator();
      }, 10000);
    });
    return {
      saveHandler,
      checkpoints,
      region,
      person,
      transport,
      typeOfPassing,
      typeOfPass,
      urgency,
      product,
      ID,
    };
  },
};
</script>

<style lang="scss" scoped>
.pass-info {
  position: absolute;
  right: 0;
  top: 0;
  background: #ffffff;
  border-radius: 0px 25px 25px 0px;
  padding: 10px;
  box-shadow: -15px 0px 46px 0px hsla(0, 0%, 7%, 0.5);
  width: 336px;
  height: 100%;
}
.dashed-block {
  border: 1px dashed #78b62c;
  border-radius: 0px 25px 25px 0px;
  height: 100%;
}
.info-block {
  display: flex;
  flex-direction: column;
}
</style>