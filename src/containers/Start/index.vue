<template>
  <div class="Start">
    <div class="Start__content">
      <div class="Start__content--title">
        <h1 class="Start__content--title-text">{{ getAppTitle }}</h1>
        <h2 class="Start__content--title-subtext">{{ getAppDescription }}</h2>
      </div>
      <div class="Start__content--body">
        <UploadFileButton class="Start__content--body-upload hover" :imageSrc="currentIcon" :onUpload="handleFileUpload" />
        <div v-show="showTags" class="Start__content--body-tags">
          <span v-for="tag in getTags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style lang="sass" src="./style.sass"></style>
