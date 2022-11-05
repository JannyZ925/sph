<template>
<div>
  <TypeNav/>
  <ListContainer/>
  <TodayRecommend/>
  <Rank/>
  <Like/>
  <Floor v-for="(floor, index) in floorList" :key="floor.id" :floor="floor"/>
  <Brand/>
</div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import {mapState} from "vuex";

export default {
  name: "Home",
  components: {
    Brand,
    Floor,
    Like,
    Rank,
    TodayRecommend,
    ListContainer
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  },
  mounted() {
    this.$store.dispatch('getFloorList')
  }
}
</script>

<style scoped>

</style>