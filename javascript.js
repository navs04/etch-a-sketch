div=document.querySelector('#container');

function Grid(size){
    for(let i=0;i<size;i++){
        let column=document.createElement('div');
        column.classList.add('column');
        for(j=0;j<size;j++){
            let row=document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);

            let randomColor=(min,max)=> min+Math.floor(Math.random()*(max-min+1));
            let r=randomColor(0,255);
            let g=randomColor(0,255);
            let b=randomColor(0,255);
            let rgb=`rgb(${r},${g},${b})`;

            row.addEventListener('mouseenter',function(){
                row.style.backgroundColor=rgb;
            });

        }
        div.appendChild(column);
    }
}
Grid(16);

btn=document.querySelector("#btn");
btn.addEventListener('click',function(){
    numberOfSquares=prompt("enter number of squares per side for the new grid:");

    div.innerHTML="";

    if(numberOfSquares<=100){
        Grid(numberOfSquares);
    }
    else{
        Grid(100);
    }
});


