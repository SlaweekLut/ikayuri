console.log('ʅ(°_°)ʃ Animation ʃ(°_°)ʅ')
// gsap.to('.intro__decor--1', {
// 	scrollTrigger: ".intro__decor--1",
// 	start: "top top",
// 	end: +=400,
// })

// let scrollAnimation = gsap.timeline({
// 	scrollTrigger: {
// 		trigger: ".intro",
// 		pin: true,
// 		start: "top top",
// 		end: "+=500",
// 		scrub: 1,
// 		snap: {
// 			snapTo: "labels",
// 			duration: {min: 0.2, max: 3},
// 			delay: 0.2,
// 			ease: "power1.inOut"
// 		}
// 	}
// })

gsap.to(".intro__decor--1", {
	scrollTrigger: {
		trigger: '.intro__decor--1',
		start: 'top top',
		scrub: 1,
	},
	y: '+=30%',
	filter: 'blur(5px)',
	ease: 'power3'
})
gsap.from(".contacts__decor", {
	scrollTrigger: {
		trigger: '.contacts__decor',
		start: 'top bottom',
		scrub: 1,
	},
	scale: 1.2,
	ease: 'power3'
})

gsap.to(".kids__decor--5", {
	scrollTrigger: {
		trigger: '.kids__decor--5',
		start: 'top top',
		scrub: 1,
	},
	y: '+=40%',
	filter: 'blur(5px)',
	ease: 'power3'
})

gsap.to(".faq__decor--2", {
	scrollTrigger: {
		trigger: '.faq__decor--2',
		start: 'top top',
		scrub: 1,
	},
	y: '+=40%',
	filter: 'blur(5px)',
	ease: 'power3'
})

gsap.to(".faq__decor--1", {
	scrollTrigger: {
		trigger: '.faq__decor--1',
		start: 'bottom bottom',
		scrub: 1,
	},
	y: '+=40%',
	filter: 'blur(5px)',
	ease: 'power3'
})

gsap.to(".intro__decor--2", {
	scrollTrigger: {
		trigger: '.intro__decor--2',
		start: 'top center',
		scrub: 1,
	},
	y: '+=30%',
	filter: 'blur(5px)',
	ease: 'power3'
})

gsap.to(".intro__decor--3", {
	scrollTrigger: {
		trigger: '.intro__decor--3',
		start: 'top top',
		scrub: 1,
	},
	y: '+=10%',
	x: '-=10%',
	ease: 'none'
})


document.querySelectorAll('.nails__item').forEach(el => {
	gsap.to(el, {
		scrollTrigger: {
			trigger: '.nails__container',
			start: 'top bottom',
			scrub: 1,
		},
		x: '+=100%',
		ease: 'none'
	})

})

document.querySelectorAll('img[src="assets/images/brush.svg"]').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		x: el.classList.contains('rtl') ? 200 : -200,
		scale: 1,
		duration: .3,
		opacity: 0,
		delay: .1,
	})
});

document.querySelectorAll('.section__title, h2:not(.content__suptitle), .content__title').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		x: el.classList.contains('rtl') ? 200 : -200,
		scale: 1,
		opacity: 0,
		duration: .3,
		delay: .2,
	})
});

document.querySelectorAll('.catalog-item').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		scale: .5,
		opacity: 0,
		duration: .3,
		delay: .2,
	})
});

gsap.to(".catalog__decor", {
	scrollTrigger: {
		trigger: '.catalog__decor',
		start: 'top 100px',
		scrub: 1,
	},
	y: '+=70%',
	// ease: 'power3'
})

document.querySelectorAll('.section__subtitle, .content__subtitle').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		x: el.classList.contains('rtl') ? 200 : -200,
		scale: 1,
		opacity: 0,
		duration: .3,
		delay: .3,
	})
});

document.querySelectorAll('.content__suptitle').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		x: -200,
		scale: 1,
		opacity: 0,
		duration: .3,
		delay: .1,
	})
});

document.querySelectorAll('.about__text, .content__text').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		x: el.classList.contains('rtl') ? 200 : -200,
		scale: 1,
		opacity: 0,
		duration: .3,
		delay: .3,
	})
});

document.querySelectorAll('.lawyer-item').forEach(el => {
	gsap.from(el, {
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			toggleActions: "play pause resume reset"
		},
		y: 200,
		scale: 1,
		opacity: 0,
		duration: .6,
	})
});

