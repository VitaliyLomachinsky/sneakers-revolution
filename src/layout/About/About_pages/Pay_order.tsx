const Pay_order = () => {
    return (<div>
        <h2 className="about_main_title">If the product is available in Ukraine:</h2>
        <p className="about_main_paragraph">1. Payment upon receipt at the branches of the Nova Poshta delivery service.
            You will be able to pay for your order after a detailed inspection and fitting.
            In this case, you will need to pay the Nova Poshta delivery service an additional
            fee for transferring funds.</p>
        

        <p className="about_main_paragraph">2. Payment through the site or full prepayment to a bank card. In this case,
            you do not need to pay a commission for the transfer of funds by the Nova Poshta service.</p>

        <h2 className="about_main_title">If the product is ordered from Europe or the USA:</h2>
        <p className="about_main_paragraph">1. Prepayment of 50% of the cost of the product to the card, the rest of
            the payment upon receipt at the Nova Poshta branch.</p>

        <p className="about_main_paragraph">2. Payment through the site or full prepayment to a bank card.</p>
    </div>)
}

export default Pay_order;