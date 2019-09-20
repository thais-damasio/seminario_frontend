<template>
  <div class="uk-panel uk-margin-large uk-background-muted" style="min-height: 100vh">
    <!-- Navbar do sistema -->
    <nav class="uk-navbar-container uk-margin" uk-navbar>
      <div class="uk-navbar-center">
        <a class="uk-navbar-item uk-logo" href="#">AllCountry</a>
      </div>
    </nav>
    <!--  -->
    <div class="uk-container" uk-filter="target: .js-filter">
      <!-- Filtro e campo de busca -->
      <ul class="uk-subnav uk-subnav-pill uk-text-center">
        <li class="uk-active" uk-filter-control>
          <a href="#">All</a>
        </li>
        <li uk-filter-control=".Africa">
          <a href="#">Africa</a>
        </li>
        <li uk-filter-control=".Americas">
          <a href="#">Americas</a>
        </li>
        <li uk-filter-control=".Asia">
          <a href="#">Asia</a>
        </li>
        <li uk-filter-control=".Europe">
          <a href="#">Europe</a>
        </li>
        <li uk-filter-control=".Oceania">
          <a href="#">Oceania</a>
        </li>
        <li>
          <a class="uk-navbar-toggle" href="#" uk-search-icon></a>
          <div
            class="uk-navbar-dropdown"
            uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav"
          >
            <div class="uk-grid-small uk-flex-middle" uk-grid>
              <div class="uk-width-expand">
                <div class="uk-search uk-search-navbar uk-width-1-1">
                  <input
                    v-model="filtro"
                    class="uk-search-input"
                    type="search"
                    placeholder="Search..."
                    autofocus
                  />
                </div>
              </div>
              <div class="uk-width-auto">
                <a v-on:click="close()" class="uk-navbar-dropdown-close" href="#" uk-close></a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!-- Lista dos resultados de países -->
      <ul class="js-filter uk-child-width-1-2@s uk-child-width-1-4@m uk-grid uk-text-center" uk-scrollspy="target: > li; cls: uk-animation-fade; delay: 100" uk-grid>
        <li v-for="(pais, index) in paisesComFiltro" :class="pais.region" v-bind:key="index">
          <!-- Card com o país -->
          <div>
              <div class="uk-card uk-card-hover uk-card-default">
                  <!-- Bandeira do País -->
                  <div class="uk-card-media-top  uk-cover-container">
                      <img :src="pais.flag" :alt="pais.name" uk-cover>
                      <canvas width="500" height="300"></canvas>
                  </div>
                  <!--  -->
                  <!-- Dados do país -->
                  <div class="uk-card-body uk-padding-small">
                      <!-- Continente do País -->
                      <div class="uk-clearfix uk-margin-small">
                        <div class="uk-float-left">
                          <span class="uk-label uk-float-right">{{ pais.region }}</span>
                        </div>
                      </div>
                      <!--  -->
                      <!-- Nome do país -->
                      <h3 class="uk-card-title uk-margin-remove">{{ pais.name }}</h3>
                      <!--  -->
                      <!-- Capital do país -->
                      <small v-if=" pais.capital ">
                        {{ pais.capital }}
                      </small>
                      <p v-else>Unknown capital or does not exist</p>
                      <!--  -->
                  </div>
                  <div class="uk-card-footer">
                      <a  v-on:click="abrirModal(pais)" uk-icon="icon: info" href="#modal-full" uk-toggle class="uk-button uk-button-text">Details&nbsp;&nbsp;</a>
                  </div>
                  <!--  -->
              </div>
          </div>
        <!--  -->
        </li>
      </ul>
      <!--  -->
      <br>
      <br>
      <!-- Nenhum resultado encontrado -->
      <h2 class="uk-text-center" v-if="paisesComFiltro==''">
        <!-- Quando a pesquisa ainda não foi concluída -->
        <div v-if="isLoading==true" uk-spinner="ratio: 3"></div>
        <!--  -->
        <!-- Quando o filtro não correspondeu a nada -->
        <span v-else>No results found, try different keywords or remove search filters.</span>
        <!--  -->
      </h2>
      <!--  -->
    </div>


    <!-- Modal -->
    <modal 
      :name="paisSelecionado.name"
      :flag="paisSelecionado.flag"
      :moeda="paisSelecionado.demonym"
      :capital="paisSelecionado.capital"
      :area="paisSelecionado.area"
      :populacao="paisSelecionado.population"
      >
    </modal>
    <!--  -->
  </div>
</template>

<script>
import Modal from "../components/Modal";
import UIkit from "../../node_modules/uikit/dist/js/uikit";
export default {
  components: {
    modal: Modal
  },
  name: "hello",
  data() {
    return {
      paises: [],
      filtro: "",
      paisSelecionado: [],
      isLoading: true
    };
  },
  computed: {
    paisesComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.paises.filter(pais => exp.test(pais.name));
      } else {
        return this.paises;
      }
    }
  },
  created() {
    this.$http
      .get("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        paises => {
          this.paises = paises; 
          this.isLoading = false;
        },
        err => console.log(err)
      );
  },
  methods: {
    close: function() {
      this.filtro = "";
    },
    abrirModal(pais) {
      this.paisSelecionado = pais;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>



