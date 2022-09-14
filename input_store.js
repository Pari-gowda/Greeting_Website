function store()
{
    localStorage.setItem("Name", document.getElementById('inpname').value);
    localStorage.setItem("DOB",document.getElementById('inpdob').value);
    localStorage.setItem("Text", document.getElementById('textbox').value);
    return;
}