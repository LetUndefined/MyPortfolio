<script setup lang="ts">
import { Mail, Linkedin, Github, FileText } from 'lucide-vue-next';
import type { LucideIcon } from 'lucide-vue-next';

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

const socialLinks: SocialLink[] = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/LetUndefined' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sandro-dangelo-80150b227/',
  },
  { icon: Mail, label: 'Email', href: 'mailto:sandroodangelo@hotmail.com' },
  { icon: FileText, label: 'Resume', href: '/files/CV-DAngelo.pdf' },
];
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
        <div class="social-links">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            :download="link.label === 'Resume' ? '' : null"
            class="social-link"
          >
            <component :is="link.icon" />
            <div>{{ link.label }}</div>
          </a>
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
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
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

/* Additional Mobile Responsive Styles */
@media (max-width: 768px) {
  .contact-section {
    padding: 5rem 0;
  }

  .contact-container {
    padding: 0 1rem;
  }

  .contact-header h2 {
    font-size: 2.5rem;
  }

  .header-description {
    font-size: 1rem;
    padding: 0 1rem;
  }

  .contact-content {
    gap: 2rem;
  }

  .social-links {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .social-link {
    padding: 1.25rem;
  }

  .social-link svg {
    width: 1.75rem;
    height: 1.75rem;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 4rem 0;
  }

  .contact-header {
    margin-bottom: 3rem;
  }

  .contact-header h2 {
    font-size: 2rem;
    line-height: 1.2;
  }

  .header-description {
    font-size: 0.95rem;
  }

  .contact-content {
    gap: 1.5rem;
  }

  .social-links {
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }

  .social-link {
    padding: 1rem;
    border-radius: 0.75rem;
  }

  .social-link svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  .social-link div {
    font-size: 0.9rem;
  }

  .contact-footer {
    margin-top: 3rem;
  }

  .contact-footer p {
    font-size: 0.85rem;
  }
}

@media (max-width: 375px) {
  .contact-header h2 {
    font-size: 1.75rem;
  }

  .header-description {
    font-size: 0.9rem;
  }

  .social-links {
    grid-template-columns: 1fr;
  }

  .social-link {
    width: 100%;
  }
}

/* Touch-friendly interactions */
@media (hover: none) and (pointer: coarse) {
  .social-link {
    min-height: 44px;
    min-width: 44px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
