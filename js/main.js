const blocks = document.querySelectorAll('.block')

blocks.forEach(block => {
    block.addEventListener('mousemove', (e) => {
        block.rect = block.getClientRects();
        document.documentElement.style.setProperty('--gradient_pos', `${e.layerX - block.rect[0].x}px ${e.layerY - block.rect[0].y}px`)
    })
})