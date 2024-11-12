<template>
    <MdEditor v-model="contents"  language="en-US" v-on:upload-img="imgupload"/>
</template>

<script setup lang="ts">

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';

const contents = ref("# hello world")


const imgupload = (e) => {
    console.debug("Uploaded img" + e);
    // TODO add to contents at current cursor pos with ![](src....)

}
</script>
