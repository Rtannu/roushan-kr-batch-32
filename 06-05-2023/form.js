
let disProClass = document.getElementsByClassName('dis-pro');
for (let i = 0; i < disProClass.length; i++) {
    disProClass[i].style.display = 'none';
}

document.getElementById('input-form-pro-dis').style.display='none';

function onSubmission() {
    document.getElementById('first-name').innerHTML = document.getElementById('first-name-input').value
    document.getElementById('last-name').innerHTML = document.getElementById('last-name-input').value
    document.getElementById('email').innerHTML = document.getElementById('email-input').value
    document.getElementById('phone').innerHTML = document.getElementById('phone-input').value
    document.getElementById('dob').innerHTML = document.getElementById('dob-input').value

    let genderEle = document.getElementsByName('gender');

    for (i = 0; i < genderEle.length; i++) {
        if (genderEle[i].checked) {
            document.getElementById('gender').innerHTML = genderEle[i].value;
            break;
        }
    }

    let hobbyEle = document.getElementsByName('hobby');

    let hobbyList=[];
    for (i = 0; i < hobbyEle.length; i++) {
        if (hobbyEle[i].checked) {
            hobbyList.push(hobbyEle[i].value)
        }
    }
            document.getElementById('hobby').innerHTML = hobbyList;

    document.getElementById('address').innerHTML = document.getElementById('address-input').value

    for (let i = 0; i < disProClass.length; i++) {
        disProClass[i].style.display = '';
    }
    document.getElementById('input-form-pro-dis').style.display='';

}