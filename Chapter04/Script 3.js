// convert email in lower case avoid any case sensitivity issue. 
var emailTo = email.to;
emailTo = emailTo.toLowerCase();

//guest user = "5136503cc611227c0183e96598c4f706" sysID. If email id does not recognize by service-now then it will mark user is guest user

if (current.opened_by == "5136503cc611227c0183e96598c4f706") {
    //set external field on incident form as email address of 
    current.u_external_sender = email.from;
}
// if email was sent to IT.Support@packt email box then exchange will send copy to service-now mail box for processing. 
else if (emailTo.indexOf("IT.Support@packt.com") >= 0) {
    // set caller field on incident form 
    current.caller_id = gs.getUserID();

    // set comments fields on incident form from body of email.


    current.comments = "Replied from: " + email.origemail + "\n\n" + email.body_text;

    // set short description field on incident form from email subject
    current.short_description = email.subject;

    // set category fields on incident as �book� 
    current.category = "Book";

    // set category fields on incident as �Technical Book� 
    current.subcategory = "Technical Book";

    // set sub subcategory on incident form   as �Other�

    current.u_sub_subcategory = "Other";

    // set business services on form as �Author Query�

    current.u_business_services.setDisplayValue('Author Query');

    // set state field on form as �New�
    current.incident_state = 1;

    // set contact type on incident form as �email�
    current.contact_type = "email";

    // insert record with values 
    current.insert();

    // stop inbound email action rule after process. 

    event.state = "stop_processing";
}