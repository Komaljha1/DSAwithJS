// Pair sum zero(array would be already sorted)
// Bruteforce Approach

function pairSumZero(array)
{
    for(let number of array)
    {
        for(let j=1; j<array.length; j++)
        {
            if(number + array[j] === 0)
            {
                return [number,array[j]];
            }
        }
    }
}
const result = pairSumZero([-5,-4,-3,-2,0,4,2,8]);
console.log(result);
