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

const changeLoginOrRegisterWindow = () => {
	changeLoginOrRegisterBtn.forEach(change => {
		change.addEventListener("click", () => {
			windowLoginOrRegister.forEach(window => {
				window.classList.toggle("display-log-reg-window");
				console.log(window);
			});
		});
	});
};
changeLoginOrRegisterWindow();

const loginUser = () => {
	acceptLoginBtn.addEventListener('click', () => {
		
	})
}

const registerAccount = () => {
	acceptRegisterBtn.addEventListener("click", () => {
		const userData = {
			name: registerNameInput.value,
			password: registerPasswordInput.value,
			email: registerEmailInput.value,
		};

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
	});
};
registerAccount();

// const acceptLoginFromUser = () => {
// 	acceptLoginBtn.addEventListener("click", () => {
// 		loginWindow.classList.add("display-log-reg-window");
// 	});
// };
// acceptLoginFromUser();

// const acceptRegisterFromUser = () => {
// 	acceptRegisterBtn.addEventListener("click", () => {
// 		registerWindow.classList.add("display-log-reg-window");
// 	});
// };
// acceptRegisterFromUser();
