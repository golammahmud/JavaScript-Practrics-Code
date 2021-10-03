const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


forms.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
    const usernameValue=username.value.trim();
	const emailValue=email.value.trim();
    if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	if(emailValue === '') {
		setErrorFor(email, 'email cannot be blank');
	}
	else {
		setSuccessFor(email);
	}
}

function setSuccessFor(input) {
    const formControl=input.parentElement;
    formControl.className = 'form-control success'
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }