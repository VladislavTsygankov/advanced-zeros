module.exports = function getZerosCount(number, base) {
    var i=2;
    var ext=1;
    var count=0;
    var counter = [];
    var dil = 0;
    var arr =[];
    var coco =[];
    var result = [];
    for(i;i<base;i++)
    {
        while(base>0 && base/i == Math.floor(base/i))
        {
                base=base/i;
                counter.push(i);
                arr.push(i);
        }
    }
    if(base>1 && base != counter[counter.length-1])
    {
        counter.push(base);
            arr.push(base);
    }
    for(var j = 0; j<counter.length-1; j++)
    {
        if (counter[j] == counter[j+1])
        {
            counter.splice(j,1);
            j=j-1;
        }
    }
    function stepen(a = [], b)
    {
        var step = 0;
        for(var j =0; j< a.length; j++)
        {
            if(a[j]==b)
            {
                step++;
            }
        }
        return step;
    }
    for(var j =0; j<counter.length; j++)
    {
        var cc = stepen(arr,counter[j]);
        coco.push(cc);
    }


    for(var j =0; j<counter.length; j++)
    {
        dil=counter[j];
        count=0;
        ext =1;
        var ss = coco[j];
        while (Math.pow(dil,ext)<number)
        {
            count = count + Math.floor(number/Math.pow(dil,ext));
            ext++;
        }
        count= Math.floor(count/ss);
        result.push(count);
    }
    var min=result[0];
    for( var j =1   ; j<result.length; j++)
    {
        if(result[j]<min)
        {
            min = result[j];
        }
    }

    return min;
  // your implementation
}
