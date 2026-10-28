try {
  // Ключ синхронизирован с src/stores/registry.js → STORES.theme.storageKey.
  const raw = localStorage.getItem('resume:theme')
  const theme = raw ? JSON.parse(raw)?.theme : null
  if (theme === 'light') {
    document.body.classList.remove('dark-scheme')
    document.documentElement.style.colorScheme = 'light'
  } else {
    document.documentElement.style.colorScheme = 'dark'
  }
} catch {
  // localStorage may be unavailable
}
