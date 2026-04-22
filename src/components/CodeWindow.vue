<template>
  <div class="code-window">
    <div class="window-header">
      <div class="window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="window-title">portfolio.vue</div>
    </div>
    <div class="window-content">
      <div class="code-line">
        <span class="code-purple">const</span> <span class="code-blue">skills</span> = [
      </div>
      <div class="code-line"><span class="code-green">'Googling errors'</span>,</div>
      <div class="code-line"><span class="code-green">'Coffee to code'</span>,</div>
      <div class="code-line"><span class="code-green">'Debugging at 3am'</span>,</div>
      <div class="code-line">]</div>
    </div>
  </div>
</template>

<style scoped>
.code-window {
  width: 100%;
  max-width: 450px;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.window-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.window-dots {
  display: flex;
  gap: 0.5rem;
}

.window-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
}

.window-dots span:nth-child(1) {
  background: #ff5f56;
}

.window-dots span:nth-child(2) {
  background: #ffbd2e;
}

.window-dots span:nth-child(3) {
  background: #27c93f;
}

.window-title {
  color: rgb(148, 163, 184);
  font-size: 0.9rem;
  font-family: var(--secondary-font);
}

.window-content {
  padding: 1.5rem;
  font-family: 'Courier New', monospace;
  font-size: 1rem;
  line-height: 1.8;
}

.code-line {
  color: rgb(203, 213, 225);
}

.code-purple {
  color: #c678dd;
}

.code-blue {
  color: #61afef;
}

.code-green {
  color: #98c379;
}
</style>
