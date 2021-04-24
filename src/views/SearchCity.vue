<template>
  <h2>Hello!</h2>
  <h4>
    The weather outside might be frightful but this app helps you plan ahead,to
    make your trip delightful!
  </h4>
  <div>
    <input type="text" class="search" placeholder="search city" />
    <i :icon="icon"></i>
  </div>
</template>

<script>
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      icon: "@/assets/search.png",
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px 20px;
  background: transparent;
}
</style>
