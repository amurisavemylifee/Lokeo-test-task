<template>
  <div class="pass-info">
    <div class="dashed-block">
      <h3>Ваш пропуск</h3>
      <div class="info-item">
        КПП<span v-for="item in options.checkpoints.value">{{ item }}</span>
      </div>
      <div class="info-item">
        Поселок и участок<span>{{ options.region.value }}</span>
      </div>
      <div class="info-item">
        Лицо<span>{{ options.person.value }}</span>
      </div>
      <div class="info-item">
        Автомобиль<span>{{ options.transport.value }}</span>
      </div>
      <div class="info-item">
        <span class="pass-info-title">Пропуск</span>
        <div class="pass-info-item">
          Тип проезжающего: <span>{{ options.typeOfPassing.value }}</span>
        </div>
        <div class="pass-info-item">
          Тип пропуска: <span>{{ options.typeOfPass.value }}</span>
        </div>
        <div class="pass-info-item">
          Срочность: <span>{{ options.urgencyType.value }}</span>
        </div>
        <div class="pass-info-item">
          Продукт, по которому предоставляется пропуск:
          <span>{{ options.product.value }}</span>
        </div>
        <div class="pass-info-item">
          Идентификатор:
          <span>
            {{ options.ID.value }}
            <app-loader
              v-if="!options.ID.value"
              style="position: absolute"
            ></app-loader
          ></span>
        </div>
        <div class="qr-placeholder-wrapper">
          <img
            class="qr-code qr-code-placeholder"
            :src="`http://qrcoder.ru/code/?0&4&0`"
            v-if="!options.ID.value && options.typeOfPass.value === 'QR'"
          />
          <app-loader
            v-if="!options.ID.value && options.typeOfPass.value === 'QR'"
            style="position: absolute; top:50%; right: 50%; transform: translate(30%,50%);"
            class="--big"
          ></app-loader>
        </div>
        <img
          class="qr-code"
          :src="`http://qrcoder.ru/code/?${options.ID.value}&4&0`"
          v-if="options.ID.value && options.typeOfPass.value === 'QR'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppLoader from "./AppLoader.vue";
export default {
  props: { options: Object },
  components: {
    AppLoader,
  },
};
</script>

<style lang="scss" scoped>
.qr-placeholder-wrapper{
    position: relative;
}
.qr-code {
  width: 250px;
  height: 250px;
  margin-top: 156px;
  &-placeholder {
    opacity: 0.5;
    filter: blur(10px);
  }
}
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
  h3 {
    padding: 35px 0 26px 32px;
    font-weight: 900;
    font-size: 20px;
    line-height: 23px;
    color: #2a341d;
  }
  .info-item {
    padding: 0 0 13px 32px;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #2a341d;
    span {
      font-weight: 400;
    }
    .pass-info-title {
      font-weight: 700;
      color: #2a341d;
      padding-bottom: 10px;
    }
    .pass-info-item {
      color: #c3c7cf;
      span {
        color: #2a341d;
      }
    }
  }
}
</style>