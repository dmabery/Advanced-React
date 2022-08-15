export default function formatMoney(amount = 0) {
    const options = {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    };

    // check if it's a clean dollar amount
    if(amount % 100 === 0) {
        options.minimumFractionDigits = 0;
    }

    const forematter = new Intl.NumberFormat('en-us', options);

    return forematter.format(amount / 100);
}