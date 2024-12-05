const page_active = document.querySelectorAll('.page_active');
console.log(page_active)

const pageActive = (links) => {
    links.forEach(link => {
        link.addEventListener('click', () => {
            links.forEach(element => {
                if(element.className == 'active') {
                    element.classList.remove('active')
                }
            });

            link.classList.add('active')
        })
        
    });
};

pageActive(page_active[0].childNodes)
