/*
  Ramesh Ghimire — portfolio scripts
  Loaded with "defer", so the HTML is ready when this runs.
*/

/** Light / dark mode toggle. The saved choice is read in <head> before the page is drawn. */
function initThemeToggle() {
  const button = document.getElementById('theme-toggle')
  if (!button) return

  const root = document.documentElement

  // Dark is the default; the "light" class switches to the light theme.
  // aria-pressed="true" tells screen readers that dark mode is on.
  const syncButton = () => {
    button.setAttribute('aria-pressed', String(!root.classList.contains('light')))
  }

  button.addEventListener('click', () => {
    const isLight = root.classList.toggle('light')

    try {
      localStorage.setItem('theme', isLight ? 'light' : 'dark')
    } catch {
      // Storage can be blocked (e.g. private browsing). The toggle still works for this visit.
    }

    syncButton()
  })

  syncButton()
}

/**
 * "Email me" button: copies the address and shows "Copied ✓" for 2 seconds.
 * It's a mailto link in the HTML, so it still works if JavaScript is off.
 */
function initCopyEmail() {
  const button = document.getElementById('copy-email')
  const status = document.getElementById('copy-status')
  if (!button) return

  const label = button.querySelector('.btn__label')
  const originalText = label.textContent
  let resetTimer

  button.addEventListener('click', async (event) => {
    // Stop the link from opening the mail app; we copy the address instead
    event.preventDefault()

    try {
      await navigator.clipboard.writeText(button.dataset.email)
    } catch {
      // Copying can be blocked. Fall back to opening the mail app.
      window.location.href = button.href
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
