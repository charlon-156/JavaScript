var btn = document.querySelector('#inp_btn')
var tex = document.querySelector('#inp_taf')
var ul = document.querySelector('#list')
var it = document.getElementsByName('li')

btn.addEventListener('click', createList)

function createList() {
    if (tex.value.length <= 0) {
        alert('erro')
    } else {
        var li = document.createElement('li')
        var del = document.createElement('button')
    
        li.appendChild(document.createTextNode(tex.value))
        ul.appendChild(li)
        tex.value = ""
    
        del.appendChild(document.createTextNode('x'))
        li.appendChild(del)
        
    }

    
}
