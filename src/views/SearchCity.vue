<template>
  <h2>Hello!</h2>
  <h4>
    The weather outside might be frightful but this app helps you plan ahead,to
    make your trip delightful!
  </h4>
  <div class="search-wrapper">
    <input type="text" class="search" placeholder="search city" />
    <router-link to="/CityDetail">
      <span>
        <font-awesome-icon
          class="search-icon"
          :icon="['fas', 'search']"
          onSubmit="goToCityDetail"
        />
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goToCity: null,
    };
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  border: 2px solid black;
  width: 150px;
  border-radius: 15px;
  padding: 10px 20px;
  background: transparent;
  outline: none;
}
.search-wrapper {
  position: relative;
  top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  //border: 2px solid black;
  //margin: auto 20px;

  span {
    position: absolute;
    left: 60%;
  }
}
h4,
h2 {
  padding: 30px;
}
</style>
