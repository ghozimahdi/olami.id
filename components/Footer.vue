<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h3 class="text-white mb-4">KS Contractor & Supplier</h3>
          <p>Providing quality construction services and materials for residential and commercial projects. Your trusted partner in building excellence.</p>
          <div class="social-icons mt-4">
            <a href="#" class="me-3"><b-icon icon="facebook" font-scale="1.5"></b-icon></a>
            <a href="#" class="me-3"><b-icon icon="instagram" font-scale="1.5"></b-icon></a>
            <a href="#" class="me-3"><b-icon icon="twitter" font-scale="1.5"></b-icon></a>
            <a href="#"><b-icon icon="linkedin" font-scale="1.5"></b-icon></a>
          </div>
        </div>
        
        <div class="col-lg-4 mb-4 mb-lg-0">
          <h4 class="text-white mb-4">Quick Links</h4>
          <ul class="list-unstyled footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        
        <div class="col-lg-4">
          <h4 class="text-white mb-4">Contact Information</h4>
          <ul class="list-unstyled contact-info">
            <li class="d-flex mb-3">
              <b-icon icon="geo-alt-fill" class="me-3 mt-1"></b-icon>
              <span>123 Construction Ave, Building City, 12345</span>
            </li>
            <li class="d-flex mb-3">
              <b-icon icon="telephone-fill" class="me-3 mt-1"></b-icon>
              <span>+1 (123) 456-7890</span>
            </li>
            <li class="d-flex mb-3">
              <b-icon icon="envelope-fill" class="me-3 mt-1"></b-icon>
              <span>info@kscontractor.com</span>
            </li>
            <li class="d-flex">
              <b-icon icon="clock-fill" class="me-3 mt-1"></b-icon>
              <span>Monday - Friday: 8:00 AM - 6:00 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <hr class="mt-4 mb-4 bg-secondary">
      
      <div class="row">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-0">&copy; {{ new Date().getFullYear() }} KS Contractor & Supplier. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-center text-md-end mt-3 mt-md-0">
          <p class="mb-0">Designed with <b-icon icon="heart-fill" variant="danger"></b-icon> by Your Company</p>
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