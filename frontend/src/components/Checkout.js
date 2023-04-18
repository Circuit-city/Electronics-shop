import React from "react";

function Chekout () {
    return(
        <>
            <div className="containerwarpper">
                <div className="leftside">
                    <img src={require('../assets/laptop-preview.png')} alt="laptop" className="img3"/>
                    <div className="overlay"></div>
                </div>

                <form action="" className="payment-content">
                    <a href="#" className="close">&times;</a>
                    <div className="header">ADDRESS DETAILS</div>
                    <div className="form-group">
                        <label for="billing-address" className="input-label">Billing Address</label>
                        <input type="text" name="billing-address" id="billing-address" className="form-control" placeholder="Billing Address"/>
                    </div>

                    <div className="form-group">
                        <label for="payment-method" className="input-label">Payment Method</label>
                        <input type="text" name="payment-method" id="payment-method" className="form-control" placeholder="Select Payment Method"/>
                    </div>

                    <div className="form-group">
                        <label for="expiry-date" className="input-label">Expiry Date</label>
                        <input type="date" name="expiry-date" id="expiry-date" className="form-control" placeholder="Choose Expiry Date"/>
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-warning">Purchase</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Chekout;