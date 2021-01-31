function checkForm() {
	var user = document.getElementById('user').value;
	var pwd = document.getElementById('pwd').value;
	if (isEmpty(user)) {
		alert("请填写姓名");
		return false;
	}
	if (isEmpty(pwd)) {
		alert("请输入密码");
		return false;
	}
}

function isEmpty(obj) {
	if (typeof obj == "undefined" || obj == null || obj == "") {
		return true;
	}
	return false;
}