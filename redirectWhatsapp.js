const myButton = document.getElementById('myButton');
const inputNumber = document.getElementById('number');
const icon = document.getElementById('icon');
const html = document.getElementsByTagName('html')[0];

html.addEventListener('keypress', e => {
    if (e.key == 'Enter') {
        redirectWhatsapp();
    }
})

myButton.addEventListener('click', redirectWhatsapp);

function redirectWhatsapp() {
    let number = `549${inputNumber.value}`
    window.open(`https://api.whatsapp.com/send?phone=${number}`, "_blank");
    inputNumber.value = '';
}
