import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function AddUserForm(props) {
	const [name, setName] = useState("");
	const [gen, setGen] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		props.newUser({ name, gen, email });
		setName("");
		setGen("");
		setEmail("");
	};
	return (
		<div>
			<Form>
				<Form.Group className="mb-3" controlId="Name">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="Name"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="Email">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="Password">
					<Form.Label>Gen</Form.Label>
					<Form.Control
						type="text"
						placeholder="Password"
						value={gen}
						onChange={(e) => {
							setGen(e.target.value);
						}}
					/>
				</Form.Group>

				<Button onClick={handleSubmit} classvariant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
}

export default AddUserForm;
