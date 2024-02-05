const express = require("express");
const cors = require("cors");
const app = express();
const userData = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	console.log(req);
	res.status(200).end();
});

app.get("/register", (req, res) => {
	console.log(req);
	res.status(200).json({ userData });
});

app.post("/register", (req, res) => {
	userData.push(req.body);
	res.status(200).end();
});

app.get("/login", (req, res) => {});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	const user = userData.find(user => user.email === email && user.password === password);

	if (user) {
		res.status(200).json({ message: "Login successful" });
	} else {
		res.status(401).json({ message: "Invalid credentials" });
	}
});

app.listen(7777, () => {
	console.log(`The app opened at port ${"http://127.0.0.1:7777/"}`);
});
