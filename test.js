
const list1 = [1,2,4];
const list2 = [1,3,4];


var mergeTwoLists = function(list1, list2) {
    const newList = [];
    const longestList = list1.length >= list2.length ? list1 : list2

    for (let i = 0; i < longestList.length; i++) {
        for (num of list1) {
            if (num <= i) {
                newList.push(num)
            }
        }
        for (num of list2) {
            if (num <= i) {
                newList.push(num)
            }
        }
    }

    return newList
};

console.log(mergeTwoLists(list1, list2))