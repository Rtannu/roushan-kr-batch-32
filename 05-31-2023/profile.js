myProfileData = {};
myProfileData['firstName'] = "Roushan";
myProfileData['lastName'] = "Kr";
myProfileData['DOB'] = "02-29-2000";
myProfileData['email'] = "rkumar16@stevens.edu";
myProfileData['age'] = 20;
myProfileData['mobileNumber'] = "+1-551-229-7878";
myProfileData['address'] = "3025 JFK Blvd, Jersey City, NJ-07306";
myProfileData['university'] = "Stevens Institute of Technology, Hoboken";
myProfileData['country'] = "India";
myProfileData['highestQualification'] = "Master in Computer Science";
myProfileData['gender'] = "Male";
myProfileData['photo'] = "assests/pr.png";
myProfileData['hobby'] = [
    { "sports": ["cricket", "football", "hockey"] },
    { "movieLanguage": ["Hindi", "English"] },
    { "others": ["Playing Guitar", "Listening Music"] }

];
let hobby = myProfileData['hobby']
let lastHobby = hobby[hobby.length - 1]['others']
document.getElementById('pro-img').src = myProfileData['photo']
document.getElementById('first-name').innerHTML = `First Name : ${myProfileData['firstName']}`
document.getElementById('last-name').innerHTML = `Last Name : ${myProfileData['lastName']}`
document.getElementById('dob').innerHTML = `DOB : ${myProfileData['DOB']}`
document.getElementById('email').innerHTML = `Email : ${myProfileData['email']}`
document.getElementById('age').innerHTML = `Age : ${myProfileData['age']}`
document.getElementById('mobile-no').innerHTML = `Mobile Number : ${myProfileData['mobileNumber']}`
document.getElementById('address').innerHTML = `Address : ${myProfileData['address']}`
document.getElementById('university').innerHTML = `University : ${myProfileData['university']}`
document.getElementById('country').innerHTML = `Country : ${myProfileData['country']}`
document.getElementById('h-q').innerHTML = `Highest Qualification : ${myProfileData['highestQualification']}`
document.getElementById('gender').innerHTML = `Gender : ${myProfileData['gender']}`
document.getElementById('lastHobby').innerHTML = `My Last Hobby : [ ${lastHobby} ]`
document

console.log(`My Last Hobby : [ ${lastHobby} ]`)
console.log(myProfileData)
