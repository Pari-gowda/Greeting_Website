window.addEventListener('load', () => {
    const name = localStorage.getItem('Name');
    const dob = localStorage.getItem('DOB');
    const text = localStorage.getItem('Text');

    document.getElementById('resname').innerHTML = name ;
    document.getElementById('resdob').innerHTML = dob ;
    document.getElementById('restext').innerHTML = text ;
})

function goback()
{
    history.back();
}

function Send_mail()
{   
    const mailid = document.getElementById('mail').value;
    const fintext = document.getElementById('restext').value;
    const subject = "Greetings";
    const link = `mailto:${mailid}` + "&?subject=" + encodeURIComponent(`${subject}`) + "&body=" + encodeURIComponent(`${fintext}`);
    window.location.href = link;
}
