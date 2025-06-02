export function cleanInput(input:string): string[]{
    
    let result = input.split(" ");
    let filterResult = [];
    for (let i of result){
        if (i !== "")
        {
            filterResult.push(i);
        }
    }
    return filterResult;
}