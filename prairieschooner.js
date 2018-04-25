/*
This validate function parses the form for client side verification of proper information.
My prospective client has a yacht in Cancun, Mexico. He was looking for someone to do some socialmedia advertising. I convinced him that we should start with proper verification so that he could limit his respones to committed prospects. His site had HTML5 verification only. After trying to import various plugins and being able to easily break them all, I decided to use regular expressions so that each field would be customized to his particular situation and only serious prospects would complete the form. 
*/
function validate(e) {
    var email = document.getElementById('email').value;
    var phone = document.getElementById('Phone-Number').value;
    var date = document.getElementById('Requested-Date').value;
    var name = document.getElementById('name').value;
 /*
 The first regular expression needed to conform to these scenarios:
 "Boon Doggle"
 "Chen Ha"
 "JP Cormier"
 "J P Locherer-Smith"
 "J. P. Ng"
 "Dr. Richard Hugger"
 The client must provide at least an initial and a last name of at least 2 characters.
 */
    var nameFilter = /^[A-Z]([A-Za-z]{1,35})?\.?\s([A-Z]([A-Za-z]{1,})?\.?)?\s?[A-Z]([A-Za-z\-]{1,})$/;
/*
 The email verification needed to "someAlphanumericCharacters(and someSymbols)" + "@" + "moreCharacters&symbols" + "." and from two to five characters after that.
 */
    var emailFilter = /^[a-zA-Z0-9_.+-]+@[a-zA-Z\d_.-]+\.([a-zA-Z\d]{2,5})+$/;
/*
 The phone filter was a tricky one because of the geographical area that is in question. The possible numbers that could be valid just in Mexico are:
6641234567
664 123 4567
664 123 45 67
(044) 664 123 4567
(044) 664 123 45 67
This expression will accomodate these, as well as with a '1' at the beginning, and as most European numbers.
 */
    var phoneFilter = /^(1\s|1|)?(\.|\-|\s|)?(\(?\d{3}\)?)?(\.|\-|\s|)?(\(?\d{3}\)?)(\.|\-|\s|)(\d{3})(\.|\-|\s|)(\d{4}|\d{2}(\.|\-|\s|)\d{2})$/;
  /*
 The date filter was written to accept both single and double digits for month and day also llimiting their range to 12 and 31 respectively.(I will work on the months with fewer days in the future.) The year can be a two or four digit number; the the range is from 2017 to 2029.
 */  
    var dateFilter = /^((0?[1-9])|(1[0-2]))(\,|\/|\.|\-|\_|\s)((0?[1-9])|([12]\d|3[0-1]))(\,|\/|\.|\-|\_|\s)((20)?(1[89])|(2\d))$/;
  /*
 The if statements apply the filters to their respective fields.
 */  
   
    if (!emailFilter.test(email)) {
        alert('Please enter a valid e-mail address.');
        return false;
    }

    if (!phoneFilter.test(phone)) {
        alert('Please correct your phone number.');
        return false;
    }
        
		if (!dateFilter.test(date)) {
        alert('Please provide a proper date.');
        return false;
    }

		if (!nameFilter.test(name)) {
            alert('Please provide a first and last name.');
            return false;
        }
    alert('all good');
    return true;
}
/*
 The submittion attempt triggers the filters and either the alerts pop up to notify the client they need to change something or the form is sent. On this site the form is hidden by default. on load it is visible but once it is submitted the form disapears. This I saw as problematic as, depending on the setting of the clients machine, this could persist even though they entered impropper information resulting in the loss of a prospective client and the possible growth of the business. Propper verification can eleviate that worry.
 The other fields are dropdowns that aren't critical. I intend on just adding the JavaScript file to the existing site at the bottom of the <body> so that it is hoisted to override any crossover. If you think that putting !important tags would be advisable please let me know.
 */
document.getElementById('wf-form-Book-Now-Form').onsubmit = validate;