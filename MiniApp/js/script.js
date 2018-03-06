var arrBack = [];

// Events

document.getElementById('container-back').addEventListener('click', function(event) {
    if(arrBack[arrBack.length-1] == 0) { //add
        var li = document.querySelector('#container-items ul');
        li.innerHTML += '<li>Item ' + document.getElementById("container-items").querySelectorAll("li").length + '</li>';
        arrBack.pop();
    }else if(arrBack[arrBack.length-1] == 1) { // delete
        var li = document.querySelector('#container-items ul li:last-child');
        li.parentNode.removeChild(li);
        arrBack.pop();
    }
});

document.getElementById('delete').addEventListener('click', function(event) {
    if (arrBack.length > 0) {
        var li = document.querySelector('#container-items ul li:last-child');
        li.parentNode.removeChild(li);
        arrBack.push(0);
    }
});

document.getElementById('add').addEventListener('click', function(event) {
    var li = document.querySelector('#container-items ul');
    li.innerHTML += '<li>Item ' + document.getElementById("container-items").querySelectorAll("li").length + '</li>';
    arrBack.push(1);
});