
function searchInArr(arr,m) {
 
   let left =0;
   let right = arr.length;

   while(left<=right){
    let mid = Math.floor((left + right) / 2);

      if(arr[mid]==m){
        return mid;
      }
      else if(arr[mid]>m){
        left=mid+1;
      }
      else{
        right=mid-1;
      }
   }
   return -1;
}

module.exports =searchInArr

