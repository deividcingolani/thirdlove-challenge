const createBandSize = () => {
    const newItem = document.createElement("div");
    newItem.classList.add("variant-selector__option");
    newItem.classList.add("selector_Band_Size");


    const newItemPharagraph = document.createElement("p");
    const textnode = document.createTextNode("Select Band Size");
    newItemPharagraph.appendChild(textnode);
    newItemPharagraph.classList.add("custom-radio__listbox-label");
    newItemPharagraph.classList.add("js-dropdown-listbox-label");



    const newItemUl = document.createElement("ul");
    newItemUl.classList.add("custom-radio__listbox");
    newItemUl.classList.add("js-dropdown-listbox");
    newItemUl.classList.add("list-band_size");


    const createLi = (textNode) => {
        const li = document.createElement("li");
        var children = newItemUl.children.length + 1
        li.setAttribute("id", "element" + children)
        li.appendChild(document.createTextNode(textNode));
        li.classList.add("custom-radio__option");
        li.classList.add("item");

        li.classList.add("js-dropdown-option");
        newItemUl.appendChild(li)

    }
    createLi(28)
    createLi(32)
    createLi(36)
    createLi(40)
    createLi(44)
    createLi(48)
    createLi(52)
    createLi(56)
    createLi(60)


    newItem.append(newItemPharagraph)
    newItem.append(newItemUl)


    let list = document.querySelector(".variant-selector__options");
    list.insertBefore(newItem, list.childNodes[0]);
    document.querySelector(".list-band_size").addEventListener("click", function (e) {
        const elemBefore = document.querySelector(".list-band_size").querySelector(".custom-radio__option--selected")
        if(elemBefore!==null){
            elemBefore.classList.remove('custom-radio__option--selected')
        }
        
        if (e.target && e.target.matches("li.item")) {
            e.target.className += " custom-radio__option--selected";
        }
    });
}

// header height
const headerHeight = document.querySelector('.site-header').offsetHeight;
// color heading
const productColorHeading = document.querySelector('.variant-selector__status');
// initial position container form === result of getDistance() fn
const formContainerPosition = 736;
// initial position products recommendations === result of getDistanceRecommendations() fn
const recommendationsPosition = 1575;

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
window.onload = () => {
    createBandSize()
    window.onscroll = () => {

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

            document.querySelector(".selector_Band_Size").style.display = 'block';


        } else if (offset <= formContainerPosition) {
            document.querySelector('.product__form').style.position = "relative";
            document.querySelector('.variant-selector__status').style.visibility = "visible";
            document.querySelector(".selector_Band_Size").style.display = 'none';
        }

        // remove fixed position conditional
        if (offset > recommendationsPosition) {
            document.querySelector('.product__form').style.position = "relative";
            document.querySelector(".selector_Band_Size").style.display = 'none';

        }
    }
}
