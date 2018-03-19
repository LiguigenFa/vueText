<template>
  <div class='bigcls'>
     <keep-alive>
    <router-view></router-view>
    </keep-alive>
  </div>
   
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
     
    }
  }
}
</script>
<style>
    .bigcls{
       height:100%;
       width:100%;
       background:#ffffff
    }
</style>