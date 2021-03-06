function onSubmit() {
	// get contract end date
	var con_end = g_form.getValue('u_contract_end_date');
	// get contract start date
	var sat_date = g_form.getValue('u_contract_start_date');

	// check if contract end date is earlier than start date
	if (sat_date > con_end) {
		// alert for user 
		alert("Please select valid contract end date. Contract end     date cannot be in past");

		// highlight necessary field on form
		g_form.flash("u_contract_end_date", "#FF0000", 10);

		// don't allow submission of form
		return false;
	}
}