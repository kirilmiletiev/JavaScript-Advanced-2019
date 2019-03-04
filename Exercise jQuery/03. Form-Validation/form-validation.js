function validate() {
    let button = document.getElementById('submit');
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let company = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');

    const regexUsername = /^[a-zA-Z0-9]{3,20}$/gm;


    // console.log(companyInfo);
    if (company.checked == true) {
        companyInfo.style = "block";

        //if (Number(companyNumber.value)) {
        if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
            companyNumber.style.borderColor = 'red';
        }
        //}
    }

    button.addEventListener('click', function (ev) {

        ev.preventDefault();

        if (company.checked == true) {
            companyInfo.style = "";

            //if (Number(companyNumber.value)) {
                if (Number(companyNumber.value) < 1000 || Number(companyNumber.value) > 9999) {
                    companyNumber.style.borderColor = 'red';
                }
            //}
        }

        if (regexUsername.exec(username.value) == null){
            username.style.borderColor = 'red';//

        }
       //if (username.value.length < 3 || username.value.length > 20) {

       //} else {
       //    username.style.border = 'none';
       //}

        // console.log(email.value);
        if (email.value.includes('@') && email.value.includes('.',2)) {

        } else {
            email.style.borderColor = 'red';
        }

        if (password.value.length < 5 || password.value.length > 15) {
            password.style.borderColor = 'red';
        }

        if (confirmPassword.value.length < 5 || confirmPassword.value.length > 15) {
            confirmPassword.style.borderColor = 'red';
        }

        if (confirmPassword.value !== password.value) {
            confirmPassword.style.borderColor = 'red';
            password.style.borderColor = 'red';
        }

        if (username.style.borderColor !== 'red') {
            if (email.style.borderColor !== 'red') {
                if (password.style.borderColor !== 'red') {
                    if (confirmPassword.style.borderColor !== 'red') {

                        if (company.checked == true) {
                            if (companyNumber.style.borderColor !== 'red') {
                                document.getElementById('valid').style = 'display: block;';
                            }
                        } else {
                            document.getElementById('valid').style = 'display: block;';
                        }
                    }
                }
            }
        }
    });
}