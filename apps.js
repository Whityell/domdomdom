document.addEventListener('DOMContentLoaded', function () {
    //console.log ("DOM fully loaded and parsed");

    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square Here");
    let containerDiv = document.createElement('div');

    btn.appendChild(btnText);
    document.body.appendChild(btn);
    document.body.appendChild(containerDiv);


    let id = '0';
    btn.addEventListener('click', function () {
        console.log('here');
        let div = document.createElement('div');
        containerDiv.appendChild(div);
        div.style.backgroundColor = "black";
        div.style.width = '100px';
        div.style.height = '100px';
        div.style.alignItems = 'left'
        div.style.margin = '2em'
        div.className = 'boxDivs';
        div.setAttribute('id', id);
        id++;



        div.addEventListener('mouseover', function () {
            console.log(this.id);
            let divText = document.createTextNode(this.id);
            div.appendChild(divText);
        })

        function getRandomColor (){
            let letters = '012345678ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        div.addEventListener('click', function () {
            let randomColor = getRandomColor();
            div.style.backgroundColor = randomColor;
        })

        div.addEventListener('dblclick', remove);

        function remove() {
            if (this.id % 2 == 0) {
                if (this.nextsibling) {
                    this.nextsibling.remove();
                } else {
                    if (this.previousSibling) {
                        this.previousSibling.remove();
                    } else {
                        alert('The next sibling does not exist');
                    }
                }
            }
        }

    });

    
// whew









});