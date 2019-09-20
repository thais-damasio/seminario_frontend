<template>
  <div id="modal-full" class="uk-modal-full" uk-modal>
    <div class="uk-modal-dialog">
      <button class="uk-modal-close-full uk-close-large" type="button" uk-close></button>
      <div class="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle" uk-grid>
        <div
          class="uk-background-cover"
          v-bind:style="{ 'background-image': 'url(' +flag+ ')' }"
          uk-height-viewport
        ></div>
        <!-- Dados do país -->
        <div class="uk-padding-large">
          <h1>{{name}}</h1>
          <p><b>Capital:</b> {{capital}} </p>
          <p><b>Nationality:</b> {{moeda}}</p>
          <p><b>Population:</b> {{populacao}}</p>
          <p><b>Territorial area:</b> {{area}} km²</p>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['name', 'flag','capital','moeda','populacao','area']
};
</script>
<style scoped>
</style>