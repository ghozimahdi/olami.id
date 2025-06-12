<template>
  <header class="header">
    <b-navbar toggleable="lg" type="light" class="py-3">
      <div class="container">
        <b-navbar-brand href="/" class="d-flex align-items-center">
          <img src="@/assets/images/icon_pt.jpeg" alt="KS Contractor & Supplier" class="brand-logo">
          <div class="d-flex flex-column ms-3">
            <span class="brand-text">Bersama Olami Sukses, pt</span>
            <span class="brand-text">Contractor & Supplier</span>
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ms-auto">
            <b-nav-item href="#home" active>{{ $t('nav.home') }}</b-nav-item>
            <b-nav-item href="#services">{{ $t('nav.services') }}</b-nav-item>
            <b-nav-item href="#about">{{ $t('nav.about') }}</b-nav-item>
            <b-nav-item href="#projects">{{ $t('nav.projects') }}</b-nav-item>
            <b-nav-item href="#testimonials">{{ $t('nav.advertising') }}</b-nav-item>
            <b-nav-item href="#testimonials">{{ $t('nav.testimonials') }}</b-nav-item>
            <b-nav-item href="#contact">{{ $t('nav.contact') }}</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ms-lg-3 me-lg-3">
            <b-button variant="primary" href="#contact" class="nav-btn">{{ $t('buttons.getQuote') }}</b-button>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-nav-item-dropdown text="" right>
              <template #button-content>
                <span class="language-switcher">{{ currentLocale.name }}</span>
              </template>
              <b-dropdown-item
                  v-for="locale in availableLocales"
                  :key="locale.code"
                  @click="switchLanguage(locale.code)"
                  :active="locale.code === $i18n.locale"
              >
                {{ locale.name }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale);
    },
    currentLocale() {
      return this.$i18n.locales.find(i => i.code === this.$i18n.locale);
    }
  },
  methods: {
    switchLanguage(locale) {
      this.$i18n.setLocale(locale);
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.brand-logo {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.navbar-nav .nav-link {
  font-weight: 500;
  padding: 0.5rem 1rem;
  color: #333;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover,
.navbar-nav .nav-link.active {
  color: #ff6b00;
}

.nav-btn {
  font-weight: 500;
}

.language-switcher {
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #333;
}

.language-switcher:hover {
  color: #ff6b00;
}


@media (max-width: 992px) {
  .navbar-nav {
    padding: 1rem 0;
  }

  .nav-btn {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
