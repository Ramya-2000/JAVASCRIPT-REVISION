let arr1 = [5,8,2,6];


arr1.flatMap(x => [x * 2]);
// [10,16,4,12]


arr1.flatMap(x => [[x * 2]]);
// [[10], [16], [4], [12]]