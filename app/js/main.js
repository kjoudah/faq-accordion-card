const accordions = document.querySelectorAll('.accordion__item')

accordions.forEach((element) => {
    element.addEventListener('click', () => {
        const accordionContent = element.querySelector('.accordion__content')
        const button = element.querySelector('.accordion__caret')
        const accordionTitle = element.querySelector('.accordion__title')

        accordionTitle.classList.toggle('active')
        accordionContent.classList.toggle('active')
        button.classList.toggle('active')
        
    })
})