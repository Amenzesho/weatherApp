<template>
  <div v-if="showLocations" class="location-grid">
    <h1>Locations</h1>
    <div class="location-card">
      <!-- <img src="@/assets/toronto.jpg" alt="toronto city" /> -->
      <div class="location-image">
        <img :src="image" alt="" />
      </div>
      <div class="weather-city">city name</div>
      <div class="weather-date">Jan 20th 2021</div>
      <div class="weather-temp">30°c</div>
      <div class="weather-status">Rain</div>
      <icon></icon>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "@/assets/toronto.jpg",
      showLocations: true,
    };
  },
  methods: {
    toggleLocation() {
      this.showLocations = !this.showLocations;
    },
  },
};
</script>

<style lang="scss" scoped>
.location-card {
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding: 5rem;
  background-image: url("https://images.unsplash.com/photo-1528702049432-7dae403a50f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80");
  background-repeat: no-repeat;
  width: 18rem;
  height: 28rem;
  object-fit: contain;
  color: #fff;
  position: absolute;
  bottom: 0;
  margin: 20px;
}
</style>
