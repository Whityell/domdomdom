document.addEventListener('DOMContentLoaded', function () {
    //console.log ("DOM fully loaded and parsed");

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square Here");
    let containerDiv = document.createElement('div');

    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(containerDiv);

    let id = '0';
    btn.addEventListener('click', function() {
        console.log('here');
        let div = document.createElement('div');
        containerDiv.appendChild(div);
        div.style.backgroundColor = "black";
        div.style.width = '200px';
        div.style.height = '200px';
        div.style.alignItems = 'left'
        div.className = 'boxDivs';
        div.setAttribute('id', id);
        id++;

        div.addEventListener('mouseover' , function () {
            console.log(this.id);
            let divText = document.createTextNode(this.id);
            div.appendChild(divText);
        })

        div.addEventListener('mouseout', function (){
            let randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', remove);


    });

    let color = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'white', 'black' ];
    
    function remove() {
        if (this.id%2 === 0) {
            if (this.nextsibling) {
                this.nextsibling.remove();
            }else{
                if (this.previousSibling){
                    this.previousSibling.remove();
                }else {
                    alert('The next sibling does not exist');
                }
            }
        }
    }

    








}); 