const loginNameInput = document.querySelector(".main__login");
const loginPasswordInput = document.querySelector(".main__login-password");
const acceptLoginBtn = document.querySelector(".main__accept-login-btn");
const registerNameInput = document.querySelector(".main__register");
const registerPasswordInput = document.querySelector(".main__register-password");
const registerEmailInput = document.querySelector(".main__register-email");
const acceptRegisterBtn = document.querySelector(".main__accept-register-btn");

const windowLoginOrRegister = document.querySelectorAll(".main__window-label");
const loginWindow = document.querySelector(".login-label");
const registerWindow = document.querySelector(".register-label");
const changeLoginOrRegisterBtn = document.querySelectorAll(".main__change-log-reg");

const afterLoginAccountWindow = document.querySelector(".main__after-login-box");
const afterRegisterAccountWindow = document.querySelector(".main__after-register-box");
const loginNameAccountAfterLog = document.querySelector(".main__after-login-name-account");
const registerNameAccountAfterReg = document.querySelector(".main__after-register-name-account");

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

const loginUser = () => {
	acceptLoginBtn.addEventListener("click", () => {});
};

const registerAccount = () => {
	acceptRegisterBtn.addEventListener("click", () => {
		const userData = {
			name: registerNameInput.value,
			password: registerPasswordInput.value,
			email: registerEmailInput.value,
		};
		registerNameAccountAfterReg.textContent = userData.name;

		fetch("http://127.0.0.1:7777/register", {
			method: "POST",
			body: JSON.stringify(userData),
			headers: {
				"Content-type": "application/json",
			},
		});
		registerNameInput.value = "";
		registerPasswordInput.value = "";
		registerEmailInput.value = "";

		registerWindow.classList.add("display-log-reg-window");
		afterRegisterAccountWindow.classList.remove("display-log-reg-window");
	});
};
registerAccount();
