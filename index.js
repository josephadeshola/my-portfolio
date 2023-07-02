document.querySelectorAll('a[home^="#"]','a[contact^="#"]','a[about^="#"]','a[service^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  let light=document.getElementById("lightmode")
  let lig=document.getElementById("lightMode")
  let dark=document.getElementById("darkmode")
  let dar=document.getElementById("darkMode")
  dark.style.display="none"
  dar.style.display="none"
  
    const light_mode=()=>{
      dark.style.display="block"
      light.style.display="none"
      document.getElementById("paragraphColor").style.color="#1e1e1e"
      document.getElementById("paragrapTag").style.color="#1e1e1e"
      document.getElementById("changeColor").style.backgroundColor="white"
      document.getElementById("aboutColor").style.backgroundColor="white"
      document.getElementById("services").style.backgroundColor="#fff"
      document.getElementById("tag-4").style.color="#1e1e1e"
      document.getElementById("skill-tag").style.color="#1e1e1e"
      document.getElementById("service-tag").style.color="#1e1e1e"
      document.getElementById("project1").style.color="#1e1e1e"
      document.getElementById("project2").style.color="#1e1e1e"
      document.getElementById("Portfolio-tag").style.color="#1e1e1e"
      document.getElementById("project3").style.color="#1e1e1e"
      document.getElementById("project4").style.color="#1e1e1e"
      document.getElementById("project5").style.color="#1e1e1e"
      document.getElementById("project6").style.color="#1e1e1e"
      document.getElementById("contact-tag") .style.color="#1e1e1e"
      document.getElementById("last-pro") .style.color="#1e1e1e"
      document.getElementById("h2-tag") .style.color="#1e1e1e"
      document.getElementById("h2-tag1") .style.color="#1e1e1e"
      document.getElementById("span1").style.color="#1e1e1e"
      document.getElementById("span2").style.color="#1e1e1e"
      document.getElementById("span3").style.color="#1e1e1e"
      document.getElementById("span4").style.color="#1e1e1e"
      document.getElementById("span5").style.color="#1e1e1e"
      document.getElementById("num1").style.color="#1e1e1e"
      document.getElementById("num2").style.color="#1e1e1e"
      document.getElementById("num3").style.color="#1e1e1e"
      document.getElementById("num4").style.color="#1e1e1e"
      document.getElementById("num5").style.color="#1e1e1e"
      document.getElementById(" h-four").style.color="#1e1e1e"
      document.getElementById(" h-six").style.color="#1e1e1e"
      document.getElementById("icon1").style.color="#1e1e1e"
    
    }
    const light_Mode=()=>{
      dar.style.display="block"
      lig.style.display="none"
      document.getElementById("paragraphColor").style.color="#1e1e1e"
      document.getElementById("paragrapTag").style.color="#1e1e1e"
      document.getElementById("changeColor").style.backgroundColor="white"
      document.getElementById("aboutColor").style.backgroundColor="white"
      document.getElementById("services").style.backgroundColor="#fff"
      document.getElementById("tag-4").style.color="#1e1e1e"
      document.getElementById("skill-tag").style.color="#1e1e1e"
      document.getElementById("service-tag").style.color="#1e1e1e"
      document.getElementById("project1").style.color="#1e1e1e"
      document.getElementById("project2").style.color="#1e1e1e"
      document.getElementById("Portfolio-tag").style.color="#1e1e1e"
      document.getElementById("project3").style.color="#1e1e1e"
      document.getElementById("project4").style.color="#1e1e1e"
      document.getElementById("project5").style.color="#1e1e1e"
      document.getElementById("project6").style.color="#1e1e1e"
      document.getElementById("contact-tag") .style.color="#1e1e1e"
      document.getElementById("last-pro") .style.color="#1e1e1e"
      document.getElementById("h2-tag") .style.color="#1e1e1e"
      document.getElementById("h2-tag1") .style.color="#1e1e1e"
      document.getElementById("span1").style.color="#1e1e1e"
      document.getElementById("span2").style.color="#1e1e1e"
      document.getElementById("span3").style.color="#1e1e1e"
      document.getElementById("span4").style.color="#1e1e1e"
      document.getElementById("span5").style.color="#1e1e1e"
      document.getElementById("num1").style.color="#1e1e1e"
      document.getElementById("num2").style.color="#1e1e1e"
      document.getElementById("num3").style.color="#1e1e1e"
      document.getElementById("num4").style.color="#1e1e1e"
      document.getElementById("num5").style.color="#1e1e1e"
      document.getElementById(" h-four").style.color="#1e1e1e"
      document.getElementById(" h-six").style.color="#1e1e1e"
      document.getElementById("icon1").style.color="#1e1e1e"
    
    }
    document.getElementById("changeColor").style.backgroundColor="rgb(39, 39, 39)"
    document.getElementById("aboutColor").style.backgroundColor="#1e1e1e"
    document.getElementById("services").style.backgroundColor="#1e1e1e"
    document.getElementById("paragrapTag").style.color="#fff"
    document.getElementById("h2-tag").style.color="#fff"
    document.getElementById("h2-tag1").style.color="#fff"
    document.getElementById("project1").style.color="#fff"
    document.getElementById("project2").style.color="#fff"
    document.getElementById("project3").style.color="#fff"
    document.getElementById("project4").style.color="#fff"
    document.getElementById("project5").style.color="#fff"
    document.getElementById("project6").style.color="#fff"
    document.getElementById("contact").style.color="#fff"
    document.getElementById("Portfolio-tag").style.color="#fff"
    document.getElementById("last-pro").style.color="#fff"
    document.getElementById("service-tag").style.color="#fff"
    document.getElementById("tag-4").style.color="#fff"
    document.getElementById("skill-tag").style.color="#fff"
    document.getElementById("span1").style.color="#fff"
    document.getElementById("span2").style.color="#fff"
    document.getElementById("span3").style.color="#fff"
    document.getElementById("span4").style.color="#fff"
    document.getElementById("span5").style.color="#fff"
    document.getElementById("num1").style.color="#fff"
    document.getElementById("num2").style.color="#fff"
    document.getElementById("num3").style.color="#fff"
    document.getElementById("num4").style.color="#fff"
    document.getElementById("num5").style.color="#fff"
    document.getElementById("paragraphColor").style.color="#fff"
    document.getElementById("contact-tag").style.color="#fff"
    document.getElementById(" h-four").style.color="#fff"
    document.getElementById(" h-six").style.color="#fff"
    document.getElementById("icon1").style.color="#fff"
  

    const dark_mode=()=>{
      dark.style.display="none"
      light.style.display="block"
      document.getElementById("paragraphColor").style.color="#fff"
      document.getElementById("paragrapTag").style.color="#fff"
      document.getElementById("changeColor").style.backgroundColor="#1e1e1e"
      document.getElementById("aboutColor").style.backgroundColor="#1e1e1e"
      document.getElementById("services").style.backgroundColor="#1e1e1e"
      document.getElementById("tag-4").style.color="#fff"
      document.getElementById("skill-tag").style.color="#fff"
      document.getElementById("service-tag").style.color="#fff"
      document.getElementById("project1").style.color="#fff"
      document.getElementById("project2").style.color="#fff"
      document.getElementById("Portfolio-tag").style.color="#fff"
      document.getElementById("project3").style.color="#fff"
      document.getElementById("project4").style.color="#fff"
      document.getElementById("project5").style.color="#fff"
      document.getElementById("project6").style.color="#fff"
      document.getElementById("contact-tag") .style.color="#fff"
      document.getElementById("last-pro") .style.color="#fff"
      document.getElementById("h2-tag") .style.color="#fff"
      document.getElementById("h2-tag1") .style.color="#fff"
      document.getElementById("span1").style.color="#fff"
      document.getElementById("span2").style.color="#fff"
      document.getElementById("span3").style.color="#fff"
      document.getElementById("span4").style.color="#fff"
      document.getElementById("span5").style.color="#fff"
      document.getElementById("num1").style.color="#fff"
      document.getElementById("num2").style.color="#fff"
      document.getElementById("num3").style.color="#fff"
      document.getElementById("num4").style.color="#fff"
      document.getElementById("num5").style.color="#fff"
      document.getElementById("h-six").style.color="#fff"
      document.getElementById("icon1").style.color="#fff"



    }
    const dark_Mode=()=>{
      dar.style.display="none"
      lig.style.display="block"
      document.getElementById("paragraphColor").style.color="#fff"
      document.getElementById("paragrapTag").style.color="#fff"
      document.getElementById("changeColor").style.backgroundColor="#1e1e1e"
      document.getElementById("aboutColor").style.backgroundColor="#1e1e1e"
      document.getElementById("services").style.backgroundColor="#1e1e1e"
      document.getElementById("tag-4").style.color="#fff"
      document.getElementById("skill-tag").style.color="#fff"
      document.getElementById("service-tag").style.color="#fff"
      document.getElementById("project1").style.color="#fff"
      document.getElementById("project2").style.color="#fff"
      document.getElementById("Portfolio-tag").style.color="#fff"
      document.getElementById("project3").style.color="#fff"
      document.getElementById("project4").style.color="#fff"
      document.getElementById("project5").style.color="#fff"
      document.getElementById("project6").style.color="#fff"
      document.getElementById("contact-tag") .style.color="#fff"
      document.getElementById("last-pro") .style.color="#fff"
      document.getElementById("h2-tag") .style.color="#fff"
      document.getElementById("h2-tag1") .style.color="#fff"
      document.getElementById("span1").style.color="#fff"
      document.getElementById("span2").style.color="#fff"
      document.getElementById("span3").style.color="#fff"
      document.getElementById("span4").style.color="#fff"
      document.getElementById("span5").style.color="#fff"
      document.getElementById("num1").style.color="#fff"
      document.getElementById("num2").style.color="#fff"
      document.getElementById("num3").style.color="#fff"
      document.getElementById("num4").style.color="#fff"
      document.getElementById("num5").style.color="#fff"
      document.getElementById("h-six").style.color="#fff"
      document.getElementById("icon1").style.color="#fff"



    }
 

  const submit=()=>{
    let information;
    information={
      your_Name:yourName.value,
      email:email.value,
      subject:subjects.value,
      message:message.value
    }

    console.log(information);

    if(!yourName.value || !email.value || !subjects.value || ! message.value){
      errorName.className="alert form-control alert-danger"
      errorName.innerHTML="Name is required"
      errorEmail.className="alert form-control alert-danger"
      errorEmail.innerHTML="Email is required"
      errorSubject.className="alert form-control alert-danger"
      errorSubject.innerHTML="Subject is requird"
      errorMessage.className="alert form-control alert-danger"
      errorMessage.innerHTML="Message is requird"
    }
  }
