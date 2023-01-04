import React from 'react'
import payment from "./payment.css"


const Payment = () => {
  
    return (
        <div>
          
  <div className='payment'>'
           
            <section class="creditly-wrapper blue-theme">
  <div class="credit-card-wrapper">
    <div class="first-row form-group">
      <div class="col-sm-8 controls">
        <label class="control-label">Card Number</label>
        <input class="number credit-card-number form-control"
          type="text" name="number"
          pattern="\d*"
          inputmode="numeric" autocomplete="cc-number" autocompletetype="cc-number" x-autocompletetype="cc-number"
          placeholder="&#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149; &#149;&#149;&#149;&#149;">
             </input>
      </div>
      <div class="col-sm-4 controls">
        <label class="control-label">CVC</label>
        <input class="security-code form-control"
          inputmode="numeric"
          pattern="\d*"
          type="text" name="security-code"
          placeholder="&#149;&#149;&#149;">
            </input>
      </div>
    </div>
    <div class="second-row form-group">
      <div class="col-sm-8 controls">
        <label class="control-label">Name on Card</label>
        <input class="billing-address-name form-control"
          type="text" name="name"
          placeholder="Mohamed Moussa">
             </input>
      </div>
      <div class="col-sm-4 controls">
        <label class="control-label">Expiration</label>
        <input class="expiration-month-and-year form-control"
          type="text" name="expiration-month-and-year"
          placeholder="MM / YY">
             </input>
      </div>
    </div>
    <div class="card-type">
    </div>
  </div>
</section>

<button class="Captcha" type="submit">Prove You Are Not A ROBOT</button>
<button class="Checkout" type="submit">Checkout</button>
<button class="Cancel" type="submit">Cancel</button>
               

            </div>
        </div>
    )
}

export default Payment