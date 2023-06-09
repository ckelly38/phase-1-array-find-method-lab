// code your solution here
function superbowlWin(arr)
{
    let item = arr.find(function(element) {
        //console.log("element = " + element);
        //console.log("element.result = " + element.result);
        if (element.result === "W")
        {
            //console.log("WIN FOUND!");
            return true;
        }
        else return false;
    });
    //console.log("item = " + item);
    if (item == undefined) return undefined;
    else return item.year;
}
