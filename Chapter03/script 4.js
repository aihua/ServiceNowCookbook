var AuthorRegistration = Class.create();
AuthorRegistration.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	AuthorRegistrationAlert: function () {
		// return value of contract end date to confirm from user 
		return "Please Confirm End Date is" + " " + this.getParameter('sysparm_contract_end');
	}
});