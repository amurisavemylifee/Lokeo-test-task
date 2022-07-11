<template>
  <table>
    <thead>
      <tr>
        <td>Идентификатор</td>
        <td>Лицо</td>
        <td>Автомобиль</td>
        <td>Идентификация</td>
        <td>КПП</td>
        <td>Статус</td>
      </tr>
    </thead>
    <tbody>
      <passes-table-item
        v-for="item in passesList"
        :options="item"
        :key="item.id"
      ></passes-table-item>
    </tbody>
  </table>
</template>

<script>
import PassesTableItem from "./PassesTableItem.vue";
import { usePassesStore } from "../store/usePassesStore";
export default {
  components: { PassesTableItem },
  setup() {
    const { passesList } = usePassesStore();
    return { passesList };
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: separate;
  border-spacing: 0 5px;
}
td {
  padding-right: 55px;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  padding-bottom: 10px;
}
</style>