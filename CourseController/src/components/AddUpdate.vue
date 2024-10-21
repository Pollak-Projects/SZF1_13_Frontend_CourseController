<template lang="">
    <h1>Szerkesztő</h1>
    <div class="text-editor">
    <textarea v-model="text" rows="10" cols="50" placeholder="Írj valamit..."></textarea>
    <div class="preview">
      <p>{{ text }}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    };
  }
};
</script>
<style lang="">
    .text-editor {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

textarea {
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.preview {
  width: 80%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
}
</style>