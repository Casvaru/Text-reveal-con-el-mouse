const mask = document.querySelectorAll('.mask')

const mouseCursor = (event) => {
    mask.forEach(mask => {
        const rect = mask.getBoundingClientRect()
        const mouseX = event.clientX - rect.left - 150
        const mouseY = event.clientY - rect.top - 150
        mask.style.maskPosition = `${mouseX}px ${mouseY}px`
    })
}

mask.forEach(mask => {
    mask.addEventListener('mousemove', mouseCursor)
})