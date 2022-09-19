// import Rating from "@material-ui/lab/Rating";
// import Button from "@material-ui/core/Button";
import TopCurve from "./TopCurve";
import BottomCurve from "./BottomCurve";
import React, { Component } from "react";

import "./Customer.scss";

class Customer extends Component {
  render() {
    return (
      <div id="customer" className="text-center py-5 mt-md-5 mt-0">
        <div className="row mt-md-5 mt-0 pb-4">
          <TopCurve />
        </div>
        <div className="row py-4">
          <BottomCurve />
        </div>
        {/* <h1 className='mt-5 pt-5'>Customer don’t just take our word for it</h1>
				<p>See what our customer think about Mixrre</p>
				<div className='container mt-5'>
					<div className='row'>
						<div className='col-md-4 mt-md-0 mt-5'>
							<div className='box text-left p-3'>
								<img src='images/Img-Male-13.png' />
								<p className='mt-5'>
									I was overwhelmed by how complex the entire process was. Thanks Mixrre for saving
									the day.
								</p>
								<hr />

								<div className='d-flex justify-content-between align-items-center'>
									<div>
										<h3>Babajide Oke</h3>
										<p className='ceo'>CEO of CEO</p>
									</div>
                                    <Rating name="half-rating" defaultValue={5} precision={0.5} />
								</div>
							</div>
						</div>

						<div className='col-md-4 mt-md-0 mt-5'>
							<div className='box text-left p-3'>
								<img src='images/Img-Male-14.png' />
								<p className='mt-5'>
                                I was overwhelmed by how complex the entire process was. Thanks Mixrre for saving the day.
								</p>
								<hr />

								<div className='d-flex justify-content-between align-items-center'>
									<div>
										<h3>Amilia Luna</h3>
										<p className='ceo'>CEO of CEO</p>
									</div>
                                    <Rating  defaultValue={5} precision={0.5} />
								</div>
							</div>
						</div>

						<div className='col-md-4 mt-md-0 mt-5'>
							<div className='box text-left p-3'>
								<img src='images/Img-Male-15.png' />
								<p className='mt-5'>
                                I was overwhelmed by how complex the entire process was. Thanks Mixrre for saving the day.
								</p>
								<hr />

								<div className='d-flex justify-content-between align-items-center'>
									<div>
										<h3>Emmalee Mclain</h3>
										<p className='ceo'>CEO of CEO</p>
									</div>
                                    <Rating defaultValue={5} precision={0.5} />
								</div>
							</div>
						</div>
					</div>
				</div>
			 */}
      </div>
    );
  }
}
export default Customer;
