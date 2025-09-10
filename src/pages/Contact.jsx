export const Contact = () => {
	//// for test
	//   const obj = {
	//     name: "tashrif",
	//     age: "24"
	// }
	// const a = Object.entries(obj)
	// console.log(a); // output is object to an array.

	// const b = Object.fromEntries(a.entries())
	// console.log(b); // output is array to an object.

	const handleFormSubmit = (data) => {
		const formData = Object.fromEntries(data.entries());

		console.log(formData);
	};

	return (
		<section className="section-contact">
			<h2 className="container-title">Contact Us</h2>

			<div className="contact-wrapper container">
				<form action={handleFormSubmit}>
					<input
						type="text"
						className="form-control"
						placeholder="enter your name"
						name="name"
						required
					/>

					<input
						type="email"
						className="form-control"
						placeholder="Enter you email"
						name="email"
						required
					/>

					<textarea
						className="form-control"
						rows="10"
						placeholder="Enter your message"
						name="message"
						required
					></textarea>

					<button type="submit" name="action" value="sent" className="mt-0 mb-10">
						Send
					</button>
				</form>
			</div>
		</section>
	);
};
