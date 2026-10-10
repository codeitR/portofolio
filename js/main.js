/*
  Ramesh Ghimire — portfolio scripts
  Loaded with "defer", so the HTML is ready when this runs.
*/

/** Light / dark mode toggle. The saved choice is read in <head> before the page is drawn. */
function initThemeToggle() {
  const button = document.getElementById('theme-toggle')
  if (!button) return

  const root = document.documentElement

  // aria-pressed="true" tells screen readers that dark mode is on
  const syncButton = () => {
    button.setAttribute('aria-pressed', String(root.classList.contains('dark')))
  }

  button.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark')

    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {
      // Storage can be blocked (e.g. private browsing). The toggle still works for this visit.
    }

    syncButton()
  })

  syncButton()
}

/** "Copy email" button: copies the address and shows "Copied ✓" for 2 seconds. */
function initCopyEmail() {
  const button = document.getElementById('copy-email')
  const status = document.getElementById('copy-status')
  if (!button) return

  const label = button.querySelector('.btn__label')
  const originalText = label.textContent
  let resetTimer

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.email)
    } catch {
      // Clipboard can be blocked. The "Email me" link still works.
      return
    }

    label.textContent = 'Copied ✓'
    if (status) status.textContent = 'Email address copied'

    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => {
      label.textContent = originalText
      if (status) status.textContent = ''
    }, 2000)
  })
}

/** Keeps the year in the footer up to date. */
function setFooterYear() {
  const year = document.getElementById('year')
  if (year) year.textContent = new Date().getFullYear()
}

initThemeToggle()
initCopyEmail()
setFooterYear()
