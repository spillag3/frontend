 // conditional logic to show or hide fields based on user input
 const ageRange = document.getElementById('age-range');
 const emailGroup = document.getElementById('email-group');
 const websiteGroup = document.getElementById('website-group');

 ageRange.style.display = 'none';
 emailGroup.style.display = 'none';
 websiteGroup.style.display = 'none';

 document.getElementById('dob').addEventListener('change', function () {
   const age = calculateAge(this.value);
   if (age < 18) {
     ageRange.style.display = 'none';
     emailGroup.style.display = 'none';
     websiteGroup.style.display = 'none';
   } else if (age >= 18 && age <= 25) {
     ageRange.style.display = 'block';
     emailGroup.style.display = 'block';
     websiteGroup.style.display = 'none';
   } else {
     ageRange.style.display = 'block';
     emailGroup.style.display = 'block';
     websiteGroup.style.display = 'block';
   }
   // display age
   
   ageRange.querySelector('.age-value').innerHTML = age;
   ageRange.querySelector('input').value = age;
 });

 // inline validation
 document.querySelectorAll('input[required]').forEach((input) => {
   input.addEventListener('invalid', function () {
     this.setCustomValidity('Please fill out this field.');
   });
   input.addEventListener('input', function () {
     this.setCustomValidity('');
   });
 });

 // helper function to calculate age from date of birth
 function calculateAge(birthday) {
   const today = new Date();
   const birthDate = new Date(birthday);
   let age = today.getFullYear() - birthDate.getFullYear();
   return age;
 }

 
