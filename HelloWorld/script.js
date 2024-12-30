let helloBtn = document.querySelector('button')
helloBtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter the name of the user');
    helloBtn.textContent = 'Roll No. 1' + name;

}