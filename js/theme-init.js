try {
  const theme = localStorage.getItem('theme')
  if (theme === 'light') {
    document.body.classList.remove('dark-scheme')
    document.documentElement.style.colorScheme = 'light'
  } else {
    document.documentElement.style.colorScheme = 'dark'
  }
} catch {
  // localStorage may be unavailable
}
