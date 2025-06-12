<template>
  <div>
    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-lg-6">
            <div class="hero-content">
              <h1 class="display-4 fw-bold mb-4 fade-in">
                {{ $t('hero.title') }}
              </h1>
              <p class="lead mb-4 fade-in">
                {{ $t('hero.subtitle') }}
              </p>
              <div class="hero-btns fade-in">
                <b-button variant="primary" size="lg" href="#services" class="me-3 mb-3 mb-sm-0">{{ $t('nav.services') }}</b-button>
                <b-button variant="outline-light" size="lg" href="#contact">{{ $t('buttons.getQuote') }}</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section bg-light">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('services.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="building" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.construction.title') }}</h3>
              <p>{{ $t('services.construction.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="tools" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.renovation.title') }}</h3>
              <p>{{ $t('services.renovation.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="truck" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.materialSupply.title') }}</h3>
              <p>{{ $t('services.materialSupply.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="pencil-square" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.design.title') }}</h3>
              <p>{{ $t('services.design.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="house" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.interior.title') }}</h3>
              <p>{{ $t('services.interior.description') }}</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="service-card">
              <div class="service-icon">
                <b-icon icon="gear" font-scale="3"></b-icon>
              </div>
              <h3>{{ $t('services.maintenance.title') }}</h3>
              <p>{{ $t('services.maintenance.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="about-img">
              <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="About KS Contractor" class="img-fluid rounded shadow">
            </div>
          </div>
          <div class="col-lg-6">
            <div class="section-title text-start">
              <h2>{{ $t('about.title') }}</h2>
            </div>
            <p class="mb-4">{{ $t('about.description1') }}</p>
            <p class="mb-4">{{ $t('about.description2') }}</p>

            <div class="row mt-5">
              <div class="col-sm-6 mb-4">
                <div class="about-feature d-flex">
                  <div class="about-feature-icon me-3">
                    <b-icon icon="check-circle-fill" variant="primary" font-scale="2"></b-icon>
                  </div>
                  <div>
                    <h4>{{ $t('about.features.qualityMaterials.title') }}</h4>
                    <p>{{ $t('about.features.qualityMaterials.description') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="about-feature d-flex">
                  <div class="about-feature-icon me-3">
                    <b-icon icon="check-circle-fill" variant="primary" font-scale="2"></b-icon>
                  </div>
                  <div>
                    <h4>{{ $t('about.features.professionalTeam.title') }}</h4>
                    <p>{{ $t('about.features.professionalTeam.description') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="about-feature d-flex">
                  <div class="about-feature-icon me-3">
                    <b-icon icon="check-circle-fill" variant="primary" font-scale="2"></b-icon>
                  </div>
                  <div>
                    <h4>{{ $t('about.features.onTimeDelivery.title') }}</h4>
                    <p>{{ $t('about.features.onTimeDelivery.description') }}</p>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 mb-4">
                <div class="about-feature d-flex">
                  <div class="about-feature-icon me-3">
                    <b-icon icon="check-circle-fill" variant="primary" font-scale="2"></b-icon>
                  </div>
                  <div>
                    <h4>{{ $t('about.features.customerSatisfaction.title') }}</h4>
                    <p>{{ $t('about.features.customerSatisfaction.description') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-5">
              <h4 class="mb-4">{{ $t('about.management.title') }}</h4>
              <p class="mb-2">Ir. H.Toni Utina, MSc, IPM</p>
              <p class="mb-2">Zulfikar A Patuti, ST</p>
              <p class="mb-2">Diah Ramayanti, ST</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section bg-light">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('projects.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="project-card">
              <div class="project-img">
                <img
                    src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Residential Construction" class="img-fluid">
              </div>
              <div class="project-info">
                <h3>{{ $t('projects.residential.title') }}</h3>
                <p>{{ $t('projects.residential.description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="project-card">
              <div class="project-img">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Commercial Building" class="img-fluid">
              </div>
              <div class="project-info">
                <h3>{{ $t('projects.commercial.title') }}</h3>
                <p>{{ $t('projects.commercial.description') }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="project-card">
              <div class="project-img">
                <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Interior Renovation" class="img-fluid">
              </div>
              <div class="project-info">
                <h3>{{ $t('projects.interior.title') }}</h3>
                <p>{{ $t('projects.interior.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('testimonials.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"Bersama Olami Sukses, pt delivered exceptional quality on our home renovation project. Their
                  attention to detail and professionalism exceeded our expectations."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center mt-4">
                <div class="testimonial-avatar me-3">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Smith"
                       class="img-fluid rounded-circle">
                </div>
                <div>
                  <h5 class="mb-0">John Smith</h5>
                  <p class="mb-0 text-muted">{{ $t('testimonials.roles.homeowner') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"We've worked with many contractors over the years, but Bersama Olami Sukses stands out for their reliability and
                  quality of work. They completed our office building on time and within budget."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center mt-4">
                <div class="testimonial-avatar me-3">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson"
                       class="img-fluid rounded-circle">
                </div>
                <div>
                  <h5 class="mb-0">Sarah Johnson</h5>
                  <p class="mb-0 text-muted">{{ $t('testimonials.roles.businessOwner') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <p>"The quality of materials provided by Bersama Olami Sukses Supplier is consistently excellent. Their delivery is always
                  on time, which has helped us complete multiple projects without delays."</p>
              </div>
              <div class="testimonial-author d-flex align-items-center mt-4">
                <div class="testimonial-avatar me-3">
                  <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Michael Brown"
                       class="img-fluid rounded-circle">
                </div>
                <div>
                  <h5 class="mb-0">Michael Brown</h5>
                  <p class="mb-0 text-muted">{{ $t('testimonials.roles.projectManager') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section bg-light">
      <div class="container">
        <div class="section-title">
          <h2>{{ $t('contact.title') }}</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="contact-info">
              <h3 class="mb-4">{{ $t('contact.getInTouch') }}</h3>
              <p class="mb-4">{{ $t('contact.getInTouchText') }}</p>

              <div class="contact-item d-flex mb-3">
                <b-icon icon="geo-alt-fill" variant="primary" font-scale="1.5" class="me-3 mt-1"></b-icon>
                <div>
                  <h5>{{ $t('contact.address') }}</h5>
                  <p>Jln. Berdikari Raya Makassar Sulawesi Selatan</p>
                </div>
              </div>

              <div class="contact-item d-flex mb-3">
                <b-icon icon="telephone-fill" variant="primary" font-scale="1.5" class="me-3 mt-1"></b-icon>
                <div>
                  <h5>{{ $t('contact.phone') }}</h5>
                  <p>0811 4114 805</p>
                </div>
              </div>

              <div class="contact-item d-flex mb-3">
                <b-icon icon="envelope-fill" variant="primary" font-scale="1.5" class="me-3 mt-1"></b-icon>
                <div>
                  <h5>{{ $t('contact.email') }}</h5>
                  <p>info@olami.id | bos@olami.id</p>
                </div>
              </div>

              <div class="contact-item d-flex mb-3">
                <b-icon icon="whatsapp" variant="primary" font-scale="1.5" class="me-3 mt-1"></b-icon>
                <div>
                  <h5>{{ $t('contact.whatsapp') }}</h5>
                  <p>0811 4114 805</p>
                </div>
              </div>

              <div class="contact-item d-flex">
                <b-icon icon="clock-fill" variant="primary" font-scale="1.5" class="me-3 mt-1"></b-icon>
                <div>
                  <h5>{{ $t('contact.workingHours') }}</h5>
                  <p>{{ $t('contact.workingHoursValue') }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="contact-form bg-white p-4 rounded shadow">
              <h3 class="mb-4">{{ $t('contact.form.title') }}</h3>
              <b-form @submit.prevent="submitForm">
                <b-form-group>
                  <b-form-input v-model="form.name" :placeholder="$t('contact.form.name')" required></b-form-input>
                </b-form-group>

                <b-form-group class="mt-3">
                  <b-form-input v-model="form.email" type="email" :placeholder="$t('contact.form.email')" required></b-form-input>
                </b-form-group>

                <b-form-group class="mt-3">
                  <b-form-input v-model="form.phone" :placeholder="$t('contact.form.phone')"></b-form-input>
                </b-form-group>

                <b-form-group class="mt-3">
                  <b-form-select v-model="form.service" :options="localizedServiceOptions"></b-form-select>
                </b-form-group>

                <b-form-group class="mt-3">
                  <b-form-textarea v-model="form.message" :placeholder="$t('contact.form.message')" rows="5"
                                   required></b-form-textarea>
                </b-form-group>

                <b-button type="submit" variant="primary" class="mt-3 w-100">{{ $t('buttons.sendMessage') }}</b-button>
              </b-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        service: null,
        message: ''
      }
    }
  },
  computed: {
    localizedServiceOptions() {
      return [
        {value: null, text: this.$t('contact.form.selectService')},
        {value: 'construction', text: this.$t('services.construction.title')},
        {value: 'renovation', text: this.$t('services.renovation.title')},
        {value: 'material', text: this.$t('services.materialSupply.title')},
        {value: 'design', text: this.$t('services.design.title')},
        {value: 'interior', text: this.$t('services.interior.title')},
        {value: 'maintenance', text: this.$t('services.maintenance.title')}
      ]
    }
  },
  methods: {
    async submitForm() {
      try {
        // Create a formatted message with all form data
        const formData = new FormData();
        formData.append('name', this.form.name);
        formData.append('email', this.form.email);
        formData.append('phone', this.form.phone);
        formData.append('service', this.form.service || 'Not specified');
        formData.append('message', this.form.message);
        formData.append('_replyto', this.form.email);

        // Add the recipient emails - these will receive a copy of the submission
        formData.append('_cc', 'info@olami.id,bos@olami.id');

        // Send the form data to Formspree - using the main recipient email
        await this.$axios.post('https://formspree.io/info@olami.id', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        alert(this.$t('contact.form.successMessage'));
        this.resetForm();
      } catch (error) {
        console.error('Error sending message:', error);
        alert(this.$t('contact.form.errorMessage'));
      }
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        service: null,
        message: ''
      };
    }
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  height: 100vh;
  min-height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80') no-repeat center center;
  background-size: cover;
  color: white;
  position: relative;
  padding-top: 80px; /* To account for the fixed header */
}

.hero-content {
  padding: 2rem 0;
}

/* Services Section */
.service-card {
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  color: #ff6b00;
  margin-bottom: 1.5rem;
}

/* About Section */
.about-img img {
  width: 100%;
}

.about-feature-icon {
  color: #ff6b00;
}

/* Projects Section */
.project-card {
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-img {
  height: 250px;
  overflow: hidden;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-img img {
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
}

/* Testimonials Section */
.testimonial-card {
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.testimonial-content {
  position: relative;
  padding-top: 1.5rem;
}

.testimonial-content:before {
  content: '"';
  font-size: 5rem;
  color: #ff6b00;
  opacity: 0.2;
  position: absolute;
  top: -2rem;
  left: -1rem;
}

.testimonial-avatar img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

/* Contact Section */
.contact-form {
  background-color: white;
}

.contact-item h5 {
  margin-bottom: 0.25rem;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .hero-section {
    height: auto;
    padding: 120px 0 80px;
  }
}
</style>
