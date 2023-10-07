const blocks = [
    blockObj1 = {
        block: document.querySelector('.block-1'),
        btnUp: document.querySelector('.block-1 .btn-up'),
        btnDown: document.querySelector('.block-1 .btn-down'),
        order: 1,
        otvet: 5,
    },
    blockObj2 = {
        block: document.querySelector('.block-2'),
        btnUp: document.querySelector('.block-2 .btn-up'),
        btnDown: document.querySelector('.block-2 .btn-down'),
        order: 2,
        otvet: 3,
    },
    blockObj3 = {
        block: document.querySelector('.block-3'),
        btnUp: document.querySelector('.block-3 .btn-up'),
        btnDown: document.querySelector('.block-3 .btn-down'),
        order: 3,
        otvet: 2,
    },
    blockObj4 = {
        block: document.querySelector('.block-4'),
        btnUp: document.querySelector('.block-4 .btn-up'),
        btnDown: document.querySelector('.block-4 .btn-down'),
        order: 4,
        otvet: 4,
    },
    blockObj5 = {
        block: document.querySelector('.block-5'),
        btnUp: document.querySelector('.block-5 .btn-up'),
        btnDown: document.querySelector('.block-5 .btn-down'),
        order: 5,
        otvet: 1,
    },
]

function findNumForUp(num) {
    for(let i = 0; i < blocks.length; i++) {
        if(numbers[i] === num - 1) {
            RelaceUp(i);
            break;
        }
    }
}

function findNumForDown(num) {
    for(let i = 0; i < blocks.length; i++) {
        if(numbers[i] === num - 1) {
            RelaceDown(i);
            break;
        }
    }
}

numbers = [0,1,2,3,4];

function RelaceUp(num) {
    if(num !== 0) {
        if(blocks[num].order === 2) {
            let temp = numbers[num];
            numbers[num] = numbers[num - 1];
            numbers[num - 1] = temp;

            blocks[num].block.style.cssText = 'top: 0px;';
            blocks[num].btnUp.style.display = "none";
            blocks[num].order = 1;
            blocks[num - 1].block.style.cssText = 'top: 76px;';
            blocks[num - 1].btnUp.style.display = "block";
            blocks[num - 1].order = 2;
            
            temp = blocks[num];
            blocks[num] = blocks[num - 1];
            blocks[num - 1] = temp; 
        }
        if(blocks[num].order === 3) {
            let temp = numbers[num];
            numbers[num] = numbers[num - 1];
            numbers[num - 1] = temp;

            blocks[num].block.style.cssText = 'top: 76px;';
            blocks[num].order = 2;
            blocks[num - 1].block.style.cssText = 'top: 152px;';
            blocks[num - 1].order = 3;
            
            temp = blocks[num];
            blocks[num] = blocks[num - 1];
            blocks[num - 1] = temp; 
        }
        if(blocks[num].order === 4) {
            let temp = numbers[num];
            numbers[num] = numbers[num - 1];
            numbers[num - 1] = temp;

            blocks[num].block.style.cssText = 'top: 152px;';
            blocks[num].order = 3;
            blocks[num - 1].block.style.cssText = 'top: 228px;';
            blocks[num - 1].order = 4;
            
            temp = blocks[num];
            blocks[num] = blocks[num - 1];
            blocks[num - 1] = temp; 
        }
        if(blocks[num].order === 5) {
            let temp = numbers[num];
            numbers[num] = numbers[num - 1];
            numbers[num - 1] = temp;

            blocks[num].block.style.cssText = 'top: 228px;';
            blocks[num].order = 4;

        
            blocks[num - 1].block.style.cssText = 'top: 304px;';
            blocks[num - 1].order = 5;
            
            temp = blocks[num];
            blocks[num] = blocks[num - 1];
            blocks[num - 1] = temp; 

            blocks[num - 1].btnDown.style.display = "block";
            blocks[num].btnDown.style.display = "none";
        }
    }
}

function RelaceDown(num) {
    if(num !== 4) {
        if(blocks[num].order === 1) {
            let temp = numbers[num];
            numbers[num] = numbers[num + 1];
            numbers[num + 1] = temp;

            blocks[num].block.style.cssText = 'top: 76px;';
            blocks[num].order = 2;
            blocks[num].btnUp.style.display = "block";
            blocks[num + 1].block.style.cssText = 'top: 0;';
            blocks[num + 1].btnUp.style.display = "none";
            blocks[num + 1].order = 1;
            
            temp = blocks[num];
            blocks[num] = blocks[num + 1];
            blocks[num + 1] = temp; 
        }
        else if(blocks[num].order === 2) {
            let temp = numbers[num];
            numbers[num] = numbers[num + 1];
            numbers[num + 1] = temp;
            

            blocks[num].block.style.cssText = 'top: 152px;';
            blocks[num].order = 3;
            blocks[num + 1].block.style.cssText = 'top: 76px;';
            blocks[num + 1].order = 2;
            
            temp = blocks[num];
            blocks[num] = blocks[num + 1];
            blocks[num + 1] = temp; 
        }
        else if(blocks[num].order === 3) {
            let temp = numbers[num];
            numbers[num] = numbers[num + 1];
            numbers[num + 1] = temp;
            

            blocks[num].block.style.cssText = 'top: 228px;';
            blocks[num].order = 4;
            blocks[num + 1].block.style.cssText = 'top: 152px';
            blocks[num + 1].order = 3;
            
            temp = blocks[num];
            blocks[num] = blocks[num + 1];
            blocks[num + 1] = temp; 

            
        }
        else if(blocks[num].order === 4) {
            let temp = numbers[num];
            numbers[num] = numbers[num + 1];
            numbers[num + 1] = temp;
            
           
            blocks[num].block.style.cssText = 'top: 304px;';
            blocks[num].order = 5;
           
            blocks[num + 1].block.style.cssText = 'top: 228px;';
            
            blocks[num + 1].order = 4;
            
            temp = blocks[num];
            blocks[num] = blocks[num + 1];
            blocks[num + 1] = temp; 

            blocks[num + 1].btnDown.style.display = "none";
            blocks[num].btnDown.style.display = "block";
        }
        console.log(blocks)
    }
}

function proverka() {
    if(blocks[0].otvet === 1 && blocks[1].otvet === 2 && blocks[2].otvet === 3 && blocks[3].otvet === 4 && blocks[4].otvet === 5) {
        alert("Все верно!")
    }
    else {
        alert("Не верно!")
    }
}