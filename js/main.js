!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget) //button
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast': 
                duration = 10
                break
        }
    })
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        /*let id = setInterval(()=>{
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n>=code.length){
                window.clearInterval(id)
                fn && fn.call()
            }
        },0)*/
        let id
        id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    var code = `
/*
 *At first，看看皮卡丘的大脸^_^
 */
    .wrapper{
        width: 100%;
        height: 185px;
        position: relative;
    }
    .preview{
        height: 100%;
        background: #fde348;
        display: flex;
        justify-content: center;
        align-items: center;
    }
/*
*开始画鼻子了哦>_<
*/
    .nose{
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-color: black transparent transparent transparent;
        border-radius: 9px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -11px;  //left50%只是鼻子的左边对齐父元素的中线
    }
/*
*然后画两只眼睛o_o
*/
    .eye{
        width: 49px;
        height: 49px;
        background: #2e2e2e;
        position: absolute;
        border-radius: 50%;
        border: 2px solid black;
    }
/*
*看我美瞳00
*/
    .eye::before{
        content:'';
        display: block;
        width: 24px;
        height: 24px;
        background: #fff;
        position: absolute;
        border-radius: 50%;
        left: 5px;
        top: -1px;
        border: 2px solid #000;
    }
/*
*左眼要在左脸o_-
*/
    .eye.left{
        right: 50%;
        margin-right: 85px;
    }
/*
*右眼要放到右边啦-_o
*/
    .eye.right{
        left: 50%;
        margin-left: 85px;
    }
/*
*化个妆好不啦？涂点腮红~~
*/
    .face{
        width: 68px;
        height: 68px;
        background: #fc0d1c;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }
/*揉揉左脸
*/
    .face.left{
        right: 50%;
        margin-right: 111px;
    }
/*
*然后右脸
*/
    .face.right{
        left: 50%;
        margin-left: 111px;
    }
/*
*我的嘴唇3
*/
    .upperLip{
        height: 19px;
        width: 64px;
        border: 2px solid black;
        position: absolute;
        top: 51px;
        z-index: 1;
        background: #fde348;
    }
    .upperLip.left{
        transform: rotate(-19deg);
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        right: 50%;
    }
    .upperLip.right{
        transform: rotate(19deg);
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        left: 50%;
    }
    .mouth{
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -70px;
        
        height: 127px;
        width: 146px;
        overflow: hidden;
    }
/*
*张开嘴巴2333
*/
    .lowerLip{
        width: 138px;
        height: 1000px;
        background: #990513;
        border-radius: 100px/500px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
/*
*最后是舌头啦～
*/
    .lowerLip::after{
        content:'';
        position: absolute;
        bottom: -1px;
        left: 50%;
        margin-left: -53px;
        width: 106px;
        height: 106px;
        border-radius: 53px;
        background-color: #fc4a62;
    }
/*
*OK啦,Game Over^_^
 Bye~
*/
`
    writeCode('',code)
}.call()
