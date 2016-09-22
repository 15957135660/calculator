/**
 * Created by Administrator on 2016/8/11.
 */
var oScreen=document.getElementById('screen');
console.log(beforeNum,afterNum)
function inputKey(Num)//设置屏幕的值
{
    if (clearBool)//如果清除键已按下，清除全屏并将清除布尔值设为false；
    {
        oScreen.value = '';
        clearBool = false;
    }
    if (oScreen.value == '0' && Num != '.')//如果屏幕当前值为0且按下的值不是'.'
    {
        oScreen.value = Num;
    }
    else
    {
        if((oScreen.value.indexOf('.')==-1&&Num == '.')||Num!='.')
        {
            oScreen.value+=Num;
        }
    }
    if(signBool)//如果符号键已按下一次，后面的值为当前屏幕按下的数字
    {
        afterNum=oScreen.value;
    }
    console.log(beforeNum,afterNum)
}
function result()
{
    console.log('等号按下前'+beforeNum,afterNum)
    afterNum=oScreen.value;
    if(signGlobal=='*')
    {
        oScreen.value=parseFloat(beforeNum)*parseFloat(afterNum);
    }
    else if (signGlobal=='-')
    {
        oScreen.value=parseFloat(beforeNum)-parseFloat(afterNum);
    }
    else if (signGlobal=='/')
    {
        oScreen.value=parseFloat(beforeNum)/parseFloat(afterNum);
    }
    else if(signGlobal=='+')
    {
        oScreen.value=parseFloat(beforeNum)+parseFloat(afterNum);
    }
    else
    {
        oScreen.value=parseFloat(beforeNum)%parseFloat(afterNum);
    }
    console.log('等号按下后'+beforeNum,afterNum)
}
var beforeNum,afterNum,signGlobal,clearBool=false;
var signBool=false;
function operatingFun(sign)
{
    console.log('符号按下前'+beforeNum,afterNum)
    if(signBool)//如果符号键已按下一次，设置beforeNum为前面两个值得运算和；
    {
        beforeNum=result();
    }
    beforeNum=oScreen.value;
    signBool=true;
    signGlobal=sign;
    clearBool=true;
    console.log('符号按下后'+beforeNum,afterNum)
}
function clearFun()//清除全屏
{
    oScreen.value='';
    signBool=false;
}
function del()//删除一位
{
    oScreen.value=oScreen.value.slice(0,(oScreen.value.length-1));
}
function sqr()//开根
{
    oScreen.value= Math.sqrt(oScreen.value);
}

