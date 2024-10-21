<script>
export default {
  data() {
    return {
      items: ['Ipari informatikai technikus', 'Informatikai rendszer- és alkalmazás-üzemeltető technikus', 'Szoftverfejlesztő és -tesztelő', 'Erősáramú elektrotechnikus', 'Közismeret'],
      activeIndex: null,
    };
  },
  methods: {
    showItem(index) {
      this.activeIndex = index;
    },
    hideItem() {
      this.activeIndex = null;
    },
  },
};
</script>

<template>
  <div class="container">
    <ul class="list">
      <li v-for="(item, index) in items" :key="index" class="list-item" 
          @mouseover="showItem(index)" @mouseleave="hideItem"
          :class="{ active: activeIndex === index }">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.container {
  justify-content: right;
  height: 100vh;
}

.list {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 30%;
}

.list-item {
  align-items: center;
  height: 75px;
  background-color: #105042 ;
  color: white;
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  transition: transform 0.5s ease;
  transform: translateX(70%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(3px);

}

.list-item.active {
  cursor: pointer;
  transform: translateX(0);
  filter: blur(0);
}

.li-hover{
  cursor: pointer;
  filter: blur(0);
}

</style>
