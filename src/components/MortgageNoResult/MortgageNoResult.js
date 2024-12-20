import CalcImage from '../../assets/images/illustration-empty.svg'

function MortgageNoResults() {
    return (
        <div class="card results-display">
            <img src={CalcImage}/>
            <h2>Results shown here</h2>
            <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
        
        </div>
    )
}
export default MortgageNoResults;