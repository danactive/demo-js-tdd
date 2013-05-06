var validate = {
	"email": {
		"hasAtSign": function (email) {
			return email.indexOf('@') !== -1;
		}
	},
	"phone": {
		"isNALocal": function (phone) {
			return phone.charAt(0) !== '1';
		}
	}
};