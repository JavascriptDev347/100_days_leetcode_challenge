function containsDuplicate(nums: number[]): boolean {
    nums.sort((a:number,b:number)=>a-b);

    for(let i=1;i<nums.length;i++) {
        if(nums[i]==nums[i-1]){
            return true;
        }
    }

    return false;
};