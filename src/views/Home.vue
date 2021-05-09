<template>
  <div>
    <h1>Welcome to the Weather App</h1>
    <router-link to="/searchcity">
      <button>Get Started</button>
    </router-link>
  </div>
</template>

<script>
//import SearchCity from "@/components/SearchCity";
export default {
  name: "Home",
  data() {
    return {
      apiKey: process.env.VUE_APP_ENV_API,
      weather: [],
      location: "",
      displayWeather: false,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
  background-image: url($main-background);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  aspect-ratio: 16/9;
  opacity: 0.8;
  height: 100vh;
  width: 100vw;

  h1,
  p {
    color: #fff;
  }
}
</style>
