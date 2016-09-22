/**
 * Created by Administrator on 2016/8/12.
 */
var oScreen=document.getElementsByName("screen")
var beforeNum,afterNum,signGlobal,clearBool=false,signResult;
function inputKey(num)
{
    if(oScreen.value=='0'&&num!='.')
    {
        oScreen.value=num;
    }
    else
    {
        if((oScreen.value.indexOf(".")==-1 && num==".") || num!=".")
        {
            oScreen.value=oScreen.value+num;
        }
    }
}
function operatingFun(sign)
{
    if(signGlobal!=null)
    {
        afterNum=oScreen.value;
        result();
    }

    afterNum=null;
    beforeNum=oScreen.value;
    signGlobal=sign;
    clearBool=true;
}
function result()
{
    if(signGlobal!=null)
    {
        signResult=signGlobal;
    }
    if(afterNum==null)
    {
        afterNum=oScreen.value;
    }
    switch(signResult)
    {
        case "+":
            screenObj.value=Number(beforeNum)+Number(afterNum);
            break;
        case "-":
            screenObj.value=Number(beforeNum)-Number(afterNum);
            break;
        case "*":
            screenObj.value=Number(beforeNum)*Number(afterNum);
            break;
        case "/":
            screenObj.value=Number(beforeNum)/Number(afterNum);
            break;
        case "%":
            screenObj.value=Number(beforeNum)%Number(afterNum);
            break;
        default:
            alert("程序有误！");
            break;
    }
    beforeNum=oScreen.value;
    signGlobal=null;
}
function clearFun()//清除全屏
{
    oScreen.value='';
    signBool=false;
}
function del()//清除一位
{
    oScreen.value=oScreen.value.slice(0,(oScreen.value.length-1));
}
function sqr()//开根
{
    oScreen.value= Math.sqrt(oScreen.value);
}