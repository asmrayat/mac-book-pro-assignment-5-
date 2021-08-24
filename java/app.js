// Total
function totalAmount() {
    const total = document.getElementById('total');
    const footerTotal = document.getElementById('footerTotal');
    const totalMoney = document.getElementById('exMemory');
    const totalStorage = document.getElementById('exStorage');
    const totalDelivery = document.getElementById('Dcharge');
    console.log(totalDelivery.innerText);

    total.innerText = parseInt(totalMoney.innerText) + parseInt(totalStorage.innerText) + parseInt(totalDelivery.innerText) + 1299;

    // CuponSection

    footerTotal.innerText = total.innerText;

    document.getElementById('cuponButton').addEventListener('click', function () {
        const cuponInput = document.getElementById('cuponInput');
        const cuponValue = cuponInput.value;
        console.log(cuponValue);
        if (cuponValue == 'promo20') {
            const cuponapplied = parseFloat(total.innerText) * 0.2;
            footerTotal.innerText = total.innerText - cuponapplied;
            cuponInput.value = '';
        }

    })
}

// itemSection
function addItem(input, variant) {
    const itemName = document.getElementById(input);
    // Storage
    if (variant == '512storage') {
        itemName.innerText = 100;
        totalAmount();

    }
    else if (variant == '1TBstorage') {
        itemName.innerText = 180;
        totalAmount();

    }
    else if (variant == '256storage') {
        itemName.innerText = 0;
        totalAmount();

    }

    // memory
    else if (variant == '8gbMemory') {
        itemName.innerText = 0;
        totalAmount();

    }
    else if (variant == '16gbMemory') {
        itemName.innerText = 180;
        totalAmount();

    }

    // DeliveryFee
    else if (variant == 'freeD') {
        itemName.innerText = 0;
        totalAmount();

    }
    else if (variant == 'paidD') {
        itemName.innerText = 20;
        totalAmount();


    }

}
// Calling Functions
document.getElementById('8gbMemory').addEventListener('click', function () {
    addItem('exMemory', '8gbMemory');

})
document.getElementById('16gbMemory').addEventListener('click', function () {
    addItem('exMemory', '16gbMemory');

})

document.getElementById('256storage').addEventListener('click', function () {
    addItem('exStorage', '256storage');
})
document.getElementById('512storage').addEventListener('click', function () {
    addItem('exStorage', '512storage');

})
document.getElementById('1TBstorage').addEventListener('click', function () {
    addItem('exStorage', '1TBstorage');
})


document.getElementById('freeD').addEventListener('click', function () {
    addItem('Dcharge', 'freeD');
})
document.getElementById('paidD').addEventListener('click', function () {
    addItem('Dcharge', 'paidD')

})

