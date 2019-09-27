let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/*大家好，我是联系前端2个月的个人练习生精神小伙zzz
今天我想给大家画个太极
首先画个圆
*/
#taichi{
    width:200px;
    height:200px;
    transform:translateX(-50%);
    box-shadow:0px 0px 5px #333333;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    border-radius : 50%;
}
/* 再画2个圆 */
#taichi::before{
    content:'';
    height:50%;
    width:50%;
    display:block;
    position:absolute;
    left:50%;
    top:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}

#taichi::after{
    content:'';
    height:50%;
    width:50%;
    display:block;
    position:absolute;
    left:50%;
    bottom:0;
    transform:translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);border-radius:50%;
}
/*好了太极画完了，记得双击么么哒~*/

`
let n = 0
let myString = ''

function print() {
    setTimeout(() => {
        if (string[n] === '\n' && n >= 1) {
            myString += '<br>'
        } else if (string[n] === ' ') {
            myString += '&nbsp;'
        } else {
            myString += string[n]
        }
        style.innerHTML += string[n]
        n += 1
        html.innerHTML = myString
        html.scrollTo(0, 999999)
        if (n <= string.length - 1) {
            print()
        }
    }, 50)
}
print()