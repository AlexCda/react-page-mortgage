
function MortgageResults({data}) {
    const r = data.interest/12
    const n = data.term*12
    const monthly = (r*data.amount)/(1-((1+r)^(-n)))
    return (
        <div class="card results-display">
            <h2>Your results</h2>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
            <div>
                <p>Your monthly repayments</p>
                <span>{monthly}</span>
                <p>Total you'll repay over the term</p>
                <span>{monthly*n}</span>
            </div>
        </div>
    )
}
export default MortgageResults;