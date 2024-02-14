const loginNameInput = document.querySelector(".main__login");
const loginPasswordInput = document.querySelector(".main__login-password");
const acceptLoginBtn = document.querySelector(".main__accept-login-btn");
const registerNameInput = document.querySelector(".main__register");
const registerPasswordInput = document.querySelector(".main__register-password");
const registerEmailInput = document.querySelector(".main__register-email");
const acceptRegisterBtn = document.querySelector(".main__accept-register-btn");

const loginDataWindow = document.querySelector(".main__login-data");
const registerDataWindow = document.querySelector(".main__register-data");

const windowLoginOrRegister = document.querySelectorAll(".main__window-label");
const loginWindow = document.querySelector(".login-label");
const registerWindow = document.querySelector(".register-label");
const changeLoginOrRegisterBtn = document.querySelectorAll(".main__change-log-reg");

const afterLoginAccountWindow = document.querySelector(".main__after-login-box");
const afterRegisterAccountWindow = document.querySelector(".main__after-register-box");
const loginNameAccountAfterLog = document.querySelector(".main__after-login-name-account");
const registerNameAccountAfterReg = document.querySelectorAll(".main__after-register-name-account");
const afterLoginFieldDiscription = document.querySelector(".main__after-login-discription");
const afterLoginFieldDiscriptionERROR = document.querySelector(".main__after-login-discription-error");
const afterRegisterFieldDiscription = document.querySelector(".main__after-register-discription");
const afterRegisterFieldDiscriptionERROR = document.querySelector(".main__after-register-discription-error");
const goToLoginWindowBtn = document.querySelector(".go-to-login-window-btn");

const loginUserWindow = document.querySelector(".main__login-user");
const logOutBtn = document.querySelector(".logout-btn");

const emptyInputField = document.createElement("p");
emptyInputField.classList.add("empty-input-field");
emptyInputField.textContent = "COMPLETE THE USER DATA!";

const changeLoginOrRegisterWindow = () => {
	changeLoginOrRegisterBtn.forEach(change => {
		change.addEventListener("click", () => {
			windowLoginOrRegister.forEach(window => {
				window.classList.toggle("display-log-reg-window");
			});
		});
	});
};
changeLoginOrRegisterWindow();

const loginUser = async () => {
	acceptLoginBtn.addEventListener("click", async () => {
		const userData = {
			name: loginNameInput.value,
			password: loginPasswordInput.value,
			loginTime: new Date(),
		};
		try {
			const res = await fetch("https://bartusrm7.github.io/log-reg/login", {
				method: "POST",
				body: JSON.stringify(userData),
				headers: {
					"Content-type": "application/json",
				},
			});
			registerNameAccountAfterReg.forEach(register => {
				if (res.status === 401) {
					afterLoginFieldDiscription.classList.add("display-log-reg-window");
					afterLoginFieldDiscriptionERROR.classList.remove("display-log-reg-window");
					register.textContent = userData.name;
				} else if (res.status === 200) {
					afterLoginFieldDiscription.classList.remove("display-log-reg-window");
					afterLoginFieldDiscriptionERROR.classList.add("display-log-reg-window");
					register.textContent = userData.name;
				}
			});
		} catch (error) {
			console.error("Error during login:", error);
		}
		if (loginNameInput.value === "" || loginPasswordInput.value === "") {
			loginDataWindow.append(emptyInputField);
		} else {
			loginWindow.classList.add("display-log-reg-window");
			afterLoginAccountWindow.classList.remove("display-log-reg-window");
			loginNameInput.value = "";
			loginPasswordInput.value = "";
			// loginDataWindow.remove(emptyInputField);
		}
	});
};
loginUser();

const logoutAfterLoginUser = () => {
	logOutBtn.addEventListener("click", () => {
		loginWindow.classList.remove("display-log-reg-window");
		afterLoginAccountWindow.classList.add("display-log-reg-window");
	});
};
logoutAfterLoginUser();

const registerAccount = async () => {
	acceptRegisterBtn.addEventListener("click", async () => {
		const userData = {
			name: registerNameInput.value,
			password: registerPasswordInput.value,
			email: registerEmailInput.value,
			registerTime: new Date(),
		};
		try {
			const res = await fetch("https://bartusrm7.github.io/log-reg/register", {
				method: "POST",
				body: JSON.stringify(userData),
				headers: {
					"Content-type": "application/json",
				},
			});
			registerNameAccountAfterReg.forEach(register => {
				if (res.status === 400) {
					afterRegisterFieldDiscription.classList.add("display-log-reg-window");
					afterRegisterFieldDiscriptionERROR.classList.remove("display-log-reg-window");
					register.textContent = userData.name;
				} else if (res.status === 200) {
					afterRegisterFieldDiscription.classList.remove("display-log-reg-window");
					afterRegisterFieldDiscriptionERROR.classList.add("display-log-reg-window");
					register.textContent = userData.name;
				}
			});
		} catch (error) {
			console.log("Error during register:", error);
		}
		if (registerNameInput.value === "" || registerPasswordInput.value === "" || registerEmailInput.value === "") {
			registerDataWindow.append(emptyInputField);
		} else {
			registerWindow.classList.add("display-log-reg-window");
			afterRegisterAccountWindow.classList.remove("display-log-reg-window");
			registerNameInput.value = "";
			registerPasswordInput.value = "";
			registerEmailInput.value = "";
			// registerDataWindow.remove(emptyInputField);
		}
	});
};
registerAccount();

const goToLoginWindowFromReg = () => {
	goToLoginWindowBtn.addEventListener("click", () => {
		registerWindow.classList.add("display-log-reg-window");
		loginWindow.classList.remove("display-log-reg-window");
		afterRegisterAccountWindow.classList.add("display-log-reg-window");
	});
};
goToLoginWindowFromReg();
