// header height
const headerHeight = document.querySelector('.site-header').offsetHeight;
// color heading
const productColorHeading = document.querySelector('.variant-selector__status');
// initial position container form === result of getDistance() fn
const formContainerPosition = 736;
// initial position products recommendations === result of getDistanceRecommendations() fn
const recommendationsPosition = 1575;
// sizes 
const sizesClothes = [
	{ size: 30 },
	{ size: 34 },
	{ size: 38 },
	{ size: 42 },
]

// take current position of container form
const getDistanceForm = () => {
	let formDist = document.querySelector('.product__form').offsetTop;
	return formDist;
}

// take current position of recommendations container
const getDistanceRecommendations = () => {
	let recommendationsDist = document.querySelector('#shopify-section-related-products').offsetTop;
	return recommendationsDist
}

// add sticky class when we use onscroll event
window.onscroll = function () {
	// windows current position
	let offset = window.pageYOffset;

	// fixed container form
	if (offset >= formContainerPosition) {
		// sticky div container
		document.querySelector('.product__form').style.position = "fixed";
		document.querySelector('.product__form').style.top = `${headerHeight}px`;
		document.querySelector('.product__form').style.backgroundColor = "white";
		document.querySelector('.product__form').style.width = "100%";
		document.querySelector('.product__form').style.zIndex = "9";
		// color paragraph heading
		document.querySelector('.variant-selector__status').style.visibility = "hidden";
	} else if (offset <= formContainerPosition) {
		document.querySelector('.product__form').style.position = "relative";
		document.querySelector('.variant-selector__status').style.visibility = "visible";
	}

	// remove fixed position conditional
	if (offset > recommendationsPosition) {
		document.querySelector('.product__form').style.position = "relative";
	}
}