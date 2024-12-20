import { useRef } from 'react';
function MortgageForm({onGetData, onClear}) {
    const amountRef = useRef(null);
    const termRef = useRef(null);
    const interestRef = useRef(null);
    const repayRef = useRef(null);
    const onlyRef = useRef(null);
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        const data = {
            amount: amountRef.current.value,
            term: termRef.current.value,
            interest: interestRef.current.value,
            isRepayment: repayRef.current.checked,
            isInterestOnly: onlyRef.current.checked
        };
        onGetData(data);
        console.log("Hello");
    };
    return (
        <div class="card calculator-form">
      <div class="form-header">
        <h2>Mortgage Calculator</h2>
        <a href="#" class="clear-btn" onClick={onClear}>Clear All</a>
      </div>
      <form onSubmit={submitHandler}>
        <label for="mortgage-amount">Mortgage Amount</label>
        <div class="input-group">
          <span>£</span>
          <input type="number" id="mortgage-amount" placeholder="Enter amount" ref={amountRef}></input>
        </div>
        
        <label for="mortgage-term">Mortgage Term</label>
        <div class="input-group">
          <input type="number" id="mortgage-term" placeholder="Enter term" ref={termRef}></input>
          <span>years</span>
        </div>
        
        <label for="interest-rate">Interest Rate</label>
        <div class="input-group">
          <input type="number" id="interest-rate" placeholder="Enter rate" ref={interestRef}></input>
          <span>%</span>
        </div>
        
        <div class="mortgage-type">
          <label>Mortgage Type</label>
          <div>
            <input type="radio" id="repayment" name="mortgage-type" ref={repayRef}></input>
            <label for="repayment">Repayment</label>
          </div>
          <div>
            <input type="radio" id="interest-only" name="mortgage-type" ref={onlyRef}></input>
            <label for="interest-only">Interest Only</label>
          </div>
        </div>
        
        <button type="submit" class="calculate-btn">Calculate Repayments</button>
      </form>
    </div>
        )
}
export default MortgageForm;