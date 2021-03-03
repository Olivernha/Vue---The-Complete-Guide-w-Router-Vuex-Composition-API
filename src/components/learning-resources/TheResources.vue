<template>
    <base-card>
      <base-button @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode">Stored Resources</base-button>
      <base-button  @click="setSelectedTab('add-resource')"
                   :mode="addResButtonMode"
      >Add Resource</base-button>
    </base-card>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>

</template>

<script>
import StoredResource from '@/components/learning-resources/StoredResource';
import AddResource from '@/components/learning-resources/AddResource';
export default {
  name: 'TheResources',
  components:{
    StoredResource,AddResource
  },
  computed:{
    storedResButtonMode(){
      return this.selectedTab === 'stored-resource' ? null : 'flat'
    },
    addResButtonMode(){
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  data(){
    return{
      selectedTab:'stored-resource',
      storedResources:[
        {
          id:'official-guide',
          title:'Officical Guide',
          description:'The official Vue.js docuementation.',
          link:'https://vuejs.org'
        },

        {
          id:'google',
          title:'Google Guide',
          description:'The official Google docuementation.',
          link:'https://google.com'
        }
      ]
    };
  },
  methods:{
    setSelectedTab(tab){
      this.selectedTab=tab;
    },
    addResource(title,des,url){
      const newResource={
        id:new Date().toISOString(),
        title:title,
        description:des,
        link:url
      }
      this.storedResources.unshift(newResource);
      this.selectedTab='stored-resource';
    },
    removeResource(resId){
      const resIndex=this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex,1);
    }
  },
  provide(){
    return{
      resources:this.storedResources,
      addResource:this.addResource,
      deleteResource:this.removeResource
    }
  }
};
</script>

<style scoped>

</style>