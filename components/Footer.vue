<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h3 class="text-white mb-4">Bersama Olami Sukses, pt</h3>
          <p>{{ $t('footer.description') }}</p>
          <div class="social-icons mt-4">
            <a href="#" class="me-3"><b-icon icon="facebook" font-scale="1.5"></b-icon></a>
            <a href="#" class="me-3"><b-icon icon="instagram" font-scale="1.5"></b-icon></a>
            <a href="#" class="me-3"><b-icon icon="twitter" font-scale="1.5"></b-icon></a>
            <a href="#"><b-icon icon="linkedin" font-scale="1.5"></b-icon></a>
          </div>
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <h4 class="text-white mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="list-unstyled footer-links">
            <li><a href="#home">{{ $t('nav.home') }}</a></li>
            <li><a href="#services">{{ $t('nav.services') }}</a></li>
            <li><a href="#about">{{ $t('nav.about') }}</a></li>
            <li><a href="#projects">{{ $t('nav.projects') }}</a></li>
            <li><a href="#testimonials">{{ $t('nav.testimonials') }}</a></li>
            <li><a href="#contact">{{ $t('nav.contact') }}</a></li>
          </ul>
        </div>

        <div class="col-lg-4">
          <h4 class="text-white mb-4">{{ $t('footer.contactInfo') }}</h4>
          <ul class="list-unstyled contact-info">
            <li class="d-flex mb-3">
              <b-icon icon="geo-alt-fill" class="me-3 mt-1"></b-icon>
              <span>Jl. Berdikari Raya No.11 Makassar 90243</span>
            </li>
            <li class="d-flex mb-3">
              <b-icon icon="telephone-fill" class="me-3 mt-1"></b-icon>
              <span>0811 4114 805</span>
            </li>
            <li class="d-flex mb-3">
              <b-icon icon="envelope-fill" class="me-3 mt-1"></b-icon>
              <span>info@olami.id | bos@olami.id</span>
            </li>
            <li class="d-flex">
              <b-icon icon="clock-fill" class="me-3 mt-1"></b-icon>
              <span>{{ $t('contact.workingHoursValue') }}</span>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-4 mb-4 bg-secondary">

      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} Bersama Olami Sukses. {{ $t('footer.rights') }}</p>
        </div>
        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
          <p class="mb-0">{{ $t('footer.designedBy') }} <b-icon icon="heart-fill" variant="danger"></b-icon> by Ghozi Mahdi</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer {
  background-color: #222;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #ff6b00;
  text-decoration: none;
}

.social-icons a {
  color: #fff;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #ff6b00;
}

.contact-info li {
  color: #ccc;
}

.contact-info .b-icon {
  color: #ff6b00;
}

hr {
  opacity: 0.2;
}
</style>
