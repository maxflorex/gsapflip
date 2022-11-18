gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener('click', () => {
        gsap.to(links, { color: '#252525' });

        if (document.activeElement === link) {
            gsap.to(link, { color: "#385ae0" })
        }


        // MOVE THE LINE
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        // ANIMATE
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1, 0.5)'
        })

    });
});

// CARDS
const cards = document.querySelectorAll('.card');

cards.forEach((card, i) => {
    card.addEventListener('click', () => {
        const state = Flip.getState(cards);

        const isCardActive = card.classList.contains("active")

        cards.forEach((otherCard, otherI) => {
            otherCard.classList.remove("active");
            otherCard.classList.remove("is-inactive")
            if (!isCardActive && i !== otherI) {
                otherCard.classList.add('is-inactive')
            }
        })

        if (!isCardActive) {
            card.classList.add("active")
        }

        Flip.from(state, {
            duration: 1,
            ease: 'expo.out',
            absolute: true
        })
    })
})