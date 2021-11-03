/** Scroll to the given element from top of the page */
export const scrollToEl = (id: string) => {
	const element = document.querySelector<HTMLElement>(id)
	if (!element) {
		throw new Error(`Element with id ${id} doesn't exist`)
	}
	window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
}
