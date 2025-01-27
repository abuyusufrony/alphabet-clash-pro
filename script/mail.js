function mailProfit() {
    const first = getMailPrice('newmail');
    const oldMail = getMailPrice('oldmail');
    const newMail = 0.28;
    const newMailValue = parseFloat(newMail);
    const finalPrice = first * newMailValue;
    const oldMailPrice = parseFloat(0.58);
    const oldMailDollar = oldMailPrice * oldMail;
    const sell = finalPrice + oldMailDollar;
    const dollar = parseFloat(125);
    const convertIntoBdT = dollar * sell;
    console.log('total Bdt are:', convertIntoBdT);
    const usdtValue = document.getElementById('usdt');
    usdtValue.innerText = sell;
    const bdt = document.getElementById('bdt');
    bdt.innerText = convertIntoBdT;
    const profitBdt = getMailPrice('sentMoney');
    const profitEnd = convertIntoBdT - profitBdt;
    const totalTakaInPocket = document.getElementById('totalTaka');
    totalTakaInPocket.innerText = profitEnd;








}
function getMailPrice(mailPrice) {
    const input = document.getElementById(mailPrice);
    const inputText = input.value;
    input.value = '';
    return inputText;


}

function changeButtonColor() {
    const button = document.getElementById('myButton');
    button.style.backgroundColor = 'green'; // Change color to green
}