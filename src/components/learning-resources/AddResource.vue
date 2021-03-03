<template>
  <base-dialog v-if='inputIsInvalid' title='Invalid Input' @close='confirmError'>

    <template #default>
      <p>Unfortunately ,at least one input value is invalid</p>
      <p>Please check all inputs and make sure you enter at least one field</p>
    </template>
    <template #actions>
      <base-button @click='confirmError'>Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent='submitData'>
      <div class='form-control'>
        <label for='title'>Title</label>
        <input id='title' type='text' name='title' ref='title'>
      </div>
      <div class='form-control'>
        <label for='description'>Description</label>
        <textarea name='description' id='description' cols='30' rows='10' ref='description'></textarea>
      </div>
      <div class='form-control'>
        <label for='link'>Link</label>
        <input id='link' type='url' name='link' ref='link'>
      </div>
      <div>
        <base-button type='submit'>Add Resource</base-button>
      </div>

    </form>
  </base-card>

</template>

<script>
export default {
  name: 'AddResource',
  inject:['addResource'],
  data(){
    return{
      inputIsInvalid:false
    }
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.title.value;
      const enteredDes = this.$refs.description.value;
      const enteredUrl = this.$refs.link.value;
      if(enteredTitle.trim() === '' || enteredDes.trim() === ''|| enteredUrl.trim() === '' ){
        this.inputIsInvalid=true;
        return;
      }
      this.addResource(enteredTitle,enteredDes,enteredUrl);
    },
    confirmError(){
      this.inputIsInvalid=false;
    }

  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>