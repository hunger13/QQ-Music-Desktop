<template>
  <div>
		<ul class="tabs">
			<li v-for="(tab ,idx) in tabs" :key="idx">
				<a class="tab" :href="tab.href" @click="changed(tab)">{{tab.name}}</a>
			</li>
			<div class="tab-line" :style="{left}"></div>
		</ul>
		<div>
      <slot></slot>
		</div>
</div>
</template>

<script>
const TAB_OFFSET = 58;
export default {
  name: "Tabs",
  data() {
    return {
      tabs: []
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    changed(tab) {
      this.tabs.forEach(tab => tab.active = false)
      tab.active = true
    }
  },
  computed: {
    left() {
      return TAB_OFFSET * this.tabs.findIndex(tab => tab.active) + "px"
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs {
	position: relative;
  display: flex;
  flex-direction: row;
  margin: 60px 0 25px 20px;
  border-bottom: 1px solid #f2f2f2;
  .tab {
    font-size: 14px;
    line-height: 33px;
    margin-right: 30px;
    color: rgba(0, 0, 0, 0.6);
  }
  .tab-line {
    bottom: 1px;
    height: 2px;
    width: 28px;
    transition: 0.2s;
    position: absolute;
    background: #31c27c;
  }
}
</style>

