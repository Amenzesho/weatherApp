<template>
  <h2>Hello!</h2>
  <h4>
    The weather outside might be frightful but this app helps you plan ahead,to
    make your trip delightful!
  </h4>
  <div>
    <input type="text" class="search" placeholder="search city" />
    <span><font-awesome-icon :icon="['fas', 'search']" /></span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 2px solid black;
  border-radius: 15px;
  padding: 10px 20px;
  background: transparent;
  outline: none;
}
</style>
