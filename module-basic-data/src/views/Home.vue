<template>
  <div class="basic-home">
    
    <h4>树形表格</h4>
    <WlTable></WlTable>
  </div>
</template>

<script>
import WlTable from "@/components/wl-table.vue";

export default {
  name: "basic-home",
  components: { WlTable },
  data() {
    return {
      layout: {
        fadein: false
      }
    };
  },
  created(){
    console.log(this.$mainUtils)
    console.log(this.changeDataMsg)
  }
};
</script>
