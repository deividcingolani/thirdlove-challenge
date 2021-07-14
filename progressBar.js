const calculateDiscount = (subtotal) => {
    if (subtotal >= 100 && subtotal < 150) {
        return 15
    } else if (subtotal >= 150 && subtotal < 200) {
        return 20
    } else if (subtotal >= 200 && subtotal < 300) {
        return 30
    } else if (subtotal >= 300) {
        return 50
    }
    return 0
}

const setValuesToProgressBar = (totalCart) => {
    console.log(totalCart)
    if (totalCart >= 100 && totalCart < 150) {
        document.querySelector(".progress-bar-component progress[data-index='4']").value = 100
        document.querySelector(".progress-bar-component progress[data-index='3']").value = totalCart - 100
        document.querySelector(".progress-bar-component progress[data-index='2']").value = 0
        document.querySelector(".progress-bar-component progress[data-index='1']").value = 0
    } else if (totalCart >= 150 && totalCart < 200) {
        document.querySelector(".progress-bar-component progress[data-index='4']").value = 100
        document.querySelector(".progress-bar-component progress[data-index='3']").value = 50
        document.querySelector(".progress-bar-component progress[data-index='2']").value = totalCart - 150
        document.querySelector(".progress-bar-component progress[data-index='1']").value = 0
    } else if (totalCart >= 200 && totalCart < 300) {
        document.querySelector(".progress-bar-component progress[data-index='4']").value = 100
        document.querySelector(".progress-bar-component progress[data-index='3']").value = 50
        document.querySelector(".progress-bar-component progress[data-index='2']").value = 50
        document.querySelector(".progress-bar-component progress[data-index='1']").value = totalCart - 200
    } else if (totalCart >= 300) {
        document.querySelector(".progress-bar-component progress[data-index='4']").value = 100
        document.querySelector(".progress-bar-component progress[data-index='3']").value = totalCart - 50
        document.querySelector(".progress-bar-component progress[data-index='2']").value = totalCart - 50
        document.querySelector(".progress-bar-component progress[data-index='1']").value = totalCart - 100
    } else {
        document.querySelector(".progress-bar-component progress[data-index='4']").value = totalCart
        document.querySelector(".progress-bar-component progress[data-index='3']").value = 0
        document.querySelector(".progress-bar-component progress[data-index='2']").value = 0
        document.querySelector(".progress-bar-component progress[data-index='1']").value = 0

    }

}


const calculateDiscountAndSetValuesProgressBar = (subtotal) => {
    const discount = calculateDiscount(subtotal)
    const totalCart = subtotal - discount
    setValuesToProgressBar(totalCart)
}


window.onload = () => {
    const selector = document.querySelector('.variant-selector__submit');

    selector.addEventListener("click", () => {
        setTimeout(() => {
            document.querySelector(".progress-bar-component progress[data-index='4']").max = 100
            document.querySelector(".progress-bar-component progress[data-index='3']").max = 50

            //Load total price
            const subtotalValue = document.querySelector('.cart__own-kit-subtotal-value')
            let subtotal = Number(String(subtotalValue.textContent).substring(1))
            calculateDiscountAndSetValuesProgressBar(subtotal)
            subtotalValue.addEventListener('DOMSubtreeModified', () => {
                setTimeout(() => {
                    subtotal = Number(String(subtotalValue.textContent).substring(1))
                    calculateDiscountAndSetValuesProgressBar(subtotal)
                })
            }, 3000)

        }, 3000);

    });
}

