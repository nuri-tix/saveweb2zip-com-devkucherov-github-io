let wheelCursor = document.querySelector('.wheel__cursor')
let wheelWrapper = document.querySelector('.wheel__wrapper')
let order = document.querySelector('.order')

wheelCursor.addEventListener('click', () => {
	wheelWrapper.style.display = 'none'
	order.style.display = 'block'
})