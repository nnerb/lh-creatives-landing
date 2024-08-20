export const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  } else {
    console.error(`Element with id ${id} not found.`)
  }
}
