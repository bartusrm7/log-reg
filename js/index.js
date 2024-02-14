const express = require("express");
const cors = require("cors");
const app = express();
const userData = [];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).end();
});

app.get("https://bartusrm7.github.io/log-reg/register", (req, res) => {
	res.status(200).json({ userData });
});

app.post("https://bartusrm7.github.io/log-reg/register", (req, res) => {
	const { name, email } = req.body;
	const userExist = userData.map(user => user.name === name || user.email === email).includes(true);

	if (userExist) {
		res.status(400).json({ message: "user is already existing" });
		console.log("wrong data, try again");
	} else {
		userData.push(req.body);
		res.status(200).json({ message: "registration succesfull" });
		console.log(req.body);
	}
});

app.get("https://bartusrm7.github.io/log-reg/login", (req, res) => {
	res.status(200).end()
});

app.post("https://bartusrm7.github.io/log-reg/login", (req, res) => {
	const { name, password } = req.body;
	const user = userData.map(user => user.name === name && user.password === password).includes(true);

	if (user) {
		res.status(200).json({ message: "login successful" });
		console.log(req.body);
	} else {
		res.status(401).json({ message: "login wrong" });
		console.log("wrong data, try again");
	}
});

app.listen(7777, () => {
	console.log(`The app opened at port ${"https://bartusrm7.github.io/log-reg/"}`);
});
