var chickensDiv = document.querySelector('.chickens')

function createChicken(){
    var chicken = document.createElement('img')
    chickensDiv.append(chicken)
    chicken.setAttribute('src','./images/Chicken.png')
}

for(var x = 0; x < 60; x++){
    createChicken()
}

var rocket = document.querySelector('.rocket')
var verticalMove = 0
var horizontalMove = 0

window.addEventListener('keydown',function(e){
    if(e.code === 'ArrowUp'){
        verticalMove += 10
        rocket.style.bottom = verticalMove + 'px'
    }else if(e.code === 'ArrowDown'){
        verticalMove -= 10 
        if(verticalMove < 0){
            verticalMove = 0
        }
        rocket.style.bottom = verticalMove + 'px'
    }else if(e.code === 'ArrowRight'){
        horizontalMove += 10
        rocket.style.left = horizontalMove + 'px'
    }else if(e.code === 'ArrowLeft'){
        horizontalMove -= 10
        if(horizontalMove < 0){
            horizontalMove = 0
        }
        rocket.style.left = horizontalMove + 'px'
    }else if(e.code === 'Space'){
        var bullet = document.createElement('img')
        rocket.append(bullet)
        bullet.setAttribute('class','bullet')
        bullet.src = './images/Bullet.png'
        var y = 0
        var bulletInterval = setInterval(() => {
            y +=10
            bullet.style.bottom = y + 'px'
            if(y > 1000){
                clearInterval(bulletInterval)
            }
        }, 10);
    }
})
