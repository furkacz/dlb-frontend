<template>
  <div class="UploadFileButton">
    <label class="UploadFileButton__button" for="upload">
      <img class="UploadFileButton__button--image" :src="imageSrc" />
    </label>
    <input class="UploadFileButton__input" id="upload" type="file" accept=".jpg" @change="onUpload" />
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
