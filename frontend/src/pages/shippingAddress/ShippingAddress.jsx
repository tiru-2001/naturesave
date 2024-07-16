import React, { useState } from 'react'
import "./ShippingAddress.scss";
const ShippingAddress = () => {

    const [address, setAddress] = useState({
        fname: "",
        lname: "",
        phno: "",
        addl1: "",
        addl2: "",
        pincode: "",
        city: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({
            ...address,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(address);
    }
  return (
		<>
			<section className="full_container">
				<section className="heading_section">
					<h2>Billing Address</h2>
				</section>
				<section className="form_section">
					<form onSubmit={handleSubmit}>
						<section className="same-line">
							<section className="entries">
								<label>First Name</label>
								<input
									type="text"
									name="fname"
									required
									value={address.fname}
									onChange={handleChange}
								/>
							</section>
							<section className="entries">
								<label>Last Name</label>
								<input
									type="text"
									name="lname"
									required
									value={address.lname}
									onChange={handleChange}
								/>
							</section>
						</section>
						<label>Phone Number</label>
						<input
							type="text"
							name="phno"
							required
							value={address.phno}
							onChange={handleChange}
						/>
						<label>Address Line 1</label>
						<input
							type="text"
							name="addl1"
							required
							value={address.addl1}
							onChange={handleChange}
						/>
						<label>Address Line 2</label>
						<input
							type="text"
							name="addl2"
							required
							value={address.addl2}
							onChange={handleChange}
						/>
						<section className="same-line">
							<section className="entries">
								<label>Pin Code</label>
								<input
									type="text"
									name="pincode"
									required
									value={address.pincode}
									onChange={handleChange}
								/>
							</section>
							<section className="entries">
								<label>City</label>
								<input
									type="text"
									name="city"
									required
									value={address.city}
									onChange={handleChange}
								/>
							</section>
						</section>
						<button>Continue</button>
					</form>
				</section>
			</section>
		</>
	);
}

export default ShippingAddress