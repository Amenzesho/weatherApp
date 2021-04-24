<template>
  <div>
    <input type="text" class="search" placeholder="search city" />
    <i class="fas fa-search"></i>
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
