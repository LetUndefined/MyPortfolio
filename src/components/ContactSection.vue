<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Linkedin, Github, Send, FileText } from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'

interface SocialLink {
  icon: LucideIcon
  label: string
  href: string
}

const email = ref('')
const message = ref('')

const socialLinks: SocialLink[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/LetUndefined' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sandro-dangelo-80150b227/' },
  { icon: Mail, label: 'Email', href: 'mailto:sandroodangelo@hotmail.com' },
  { icon: FileText, label: 'Resume', href: "/files/CV-DAngelo.pdf"},
]

const handleSubmit = () => {
  console.log('Form submitted:', { email: email.value, message: message.value })
  alert('Message sent! (This is a demo)')
  email.value = ''
  message.value = ''
}
</script>


<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <div class="contact-header">

        <h2>
          Let's Create
          <br />
          <span>Something Amazing</span>
        </h2>
        <p class="header-description">
          Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from
          you.
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-form-wrapper">
          <h3>Send a Message</h3>

          <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
              <label for="email">Your Email</label>
              <input type="email" id="email" v-model="email" placeholder="you@example.com" />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                id="message"
                v-model="message"
                :rows="5"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" class="submit-button">
              <Send />
              <span>Send Message</span>
            </button>
          </form>
        </div>

        <div class="contact-sidebar">
          <div>
            <h3>Connect With Me</h3>

            <div class="social-links">
              <a
                v-for="link in socialLinks"
                :key="link.label"
                :href="link.href"
                :download="link.label === 'Resume' ? '' : null "
                class="social-link"
              >
                <component :is="link.icon" />
                <div>{{ link.label }}</div>
              </a>
            </div>

            <div class="quick-facts">
              <h4>Quick Facts</h4>
              <ul>
                <li>
                  <span class="bullet purple">▸</span>
                  <span>Available for freelance projects</span>
                </li>
                <li>
                  <span class="bullet cyan">▸</span>
                  <span>Based in Belgium</span>
                </li>
                <li>
                  <span class="bullet pink">▸</span>
                  <span>Open to remote collaborations</span>
                </li>
                <li>
                  <span class="bullet amber">▸</span>
                  <span>Response time: Usually within 24h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-footer">
        <p>© 2026 Sandro. Crafted with creativity and code.</p>
      </div>
    </div>
  </section>
</template>


<style scoped>
.contact-section {
  position: relative;
  padding: 8rem 0;
  background-color: rgb(2, 6, 23);
  overflow: hidden;
}

.contact-container {
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-header {
  text-align: center;
  margin-bottom: 4rem;
}

.sparkles-icon {
  display: inline-block;
  margin-bottom: 1.5rem;
}

.sparkles-icon svg {
  width: 4rem;
  height: 4rem;
  color: rgb(192, 132, 252);
}

.contact-header h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  font-family: var(--primary-font);
  font-weight: 400;
}

.contact-header h2 span {
  color: var(--primary-text-color);
}

.header-description {
  font-size: 1.25rem;
  color: rgb(148, 163, 184);
  max-width: 42rem;
  margin: 0 auto;
  font-family: var(--primary-font);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  max-width: 96rem;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr 1fr;
  }
}

.contact-form-wrapper {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
}

.contact-form-wrapper h3,
.contact-sidebar h3 {
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-family: var(--primary-font);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  display: block;
  color: rgb(203, 213, 225);
  margin-bottom: 0.5rem;
  font-family: var(--primary-font);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  color: white;
  font-family: var(--primary-font);
  transition: all 0.3s ease;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: rgb(100, 116, 139);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: rgb(168, 85, 247);
  box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.5);
}

.form-group textarea {
  resize: none;
}

.submit-button {
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--primary-text-color);
  color: white;
  border-radius: 0.75rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--primary-font);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.submit-button svg {
  width: 1.25rem;
  height: 1.25rem;
}

.submit-button:hover {
  opacity: 0.9;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
  transform: scale(1.02);
}

.submit-button:active {
  transform: scale(0.98);
}

.contact-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.social-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-link {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: scale(1.05) translateY(-0.25rem);
}

.social-link:active {
  transform: scale(0.95);
}

.social-link svg {
  width: 2rem;
  height: 2rem;
  color: rgb(148, 163, 184);
  margin-bottom: 0.5rem;
  transition: colors 0.3s ease;
}

.social-link:nth-child(1):hover svg {
  color: rgb(15, 23, 42);
}

.social-link:nth-child(2):hover svg {
  color: rgb(37, 99, 235);
}

.social-link:nth-child(3):hover svg {
  color: rgb(14, 165, 233);
}

.social-link:nth-child(4):hover svg {
  color: rgb(239, 68, 68);
}

.social-link div {
  color: white;
  font-family: var(--primary-font);
}

.quick-facts {
  padding: 2rem;
  background: linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
}

.quick-facts h4 {
  font-size: 1.25rem;
  color: white;
  margin-bottom: 1rem;
  font-family: var(--primary-font);
}

.quick-facts ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.quick-facts li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: rgb(203, 213, 225);
  font-family: var(--primary-font);
}

.quick-facts .bullet {
  flex-shrink: 0;
}

.quick-facts .bullet.purple {
  color: rgb(192, 132, 252);
}

.quick-facts .bullet.cyan {
  color: rgb(103, 232, 249);
}

.quick-facts .bullet.pink {
  color: rgb(244, 114, 182);
}

.quick-facts .bullet.amber {
  color: rgb(251, 191, 36);
}

.contact-footer {
  margin-top: 5rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.contact-footer p {
  color: rgb(100, 116, 139);
  font-family: var(--primary-font);
}

@media (min-width: 768px) {
  .contact-header h2 {
    font-size: 4.5rem;
  }
}
</style>
