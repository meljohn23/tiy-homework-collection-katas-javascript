//1)Given an ArrayList of ints, return true if 6 appears as either the first or last element
//in the ArrayList. The ArrayList will be length 1 or more.
//hint: The first element is nums[0] and the last element is nums[nums.length - 1].
//Check if either of those is == 6.


function firstLast6(nums) {
    if (nums[0] == 6 || nums[nums.length - 1] == 6) {
        return true;
    } else {
        return false;
    }
}

console.log(firstLast6([1, 2, 6]));
console.log(firstLast6([6, 1, 2, 3]));
console.log(firstLast6([13, 6, 1, 2, 3]));
console.log('')


// 2)Given an array of ints, return true if the array length is 1 or
// more, and the first element and the last element are equal.
// Hint:  The length is nums.length, the first element is nums[0]
// and the last element is nums[nums.length - 1]

function sameFirstLast(nums) {
    if ((nums[0] == nums[nums.length - 1]) && nums.length >= 1) {
        return true;
    } else {
        return false;
    }
}

console.log(sameFirstLast([1, 2, 3]));
console.log(sameFirstLast([1, 2, 3, 1]));
console.log(sameFirstLast([1, 2, 1]));
console.log('')

// 3)Given an array of ints length 3, return an array with the elements "rotated left" so
// {1, 2, 3} yields {2, 3, 1}
function rotateLeft3(nums) {
    move = [nums[1], nums[2], nums[0]];
    return move;
}
console.log(rotateLeft3([1, 2, 3]));
console.log(rotateLeft3([5, 11, 9]));
console.log(rotateLeft3([7, 0, 0]));
console.log('')

// 4)Given an array of ints length 3, return a new array with the elements in reverse order,
// so {1, 2, 3} becomes {3, 2, 1}
//
function reverse3(nums) {
    flip = [nums[2], nums[1], nums[0]];
    return flip;
}
console.log(reverse3([1, 2, 3]));
console.log(reverse3([5, 11, 9]));
console.log(reverse3([7, 0, 0]));
console.log('')

// 5)Given an ArrayList of Integers of at least length 2, return the sum of the first elements
// in the ArrayList and the second from last element. If the ArrayList length is less than
// 2, just sum up the elements that exist, returning 0 if the array is length 0.

function sumFirstPenultimate(nums) {
    if (nums.length >= 2) {
        return (nums[0] + nums[nums.length - 2]);
    } else if (nums.length < 2 && nums.length > 0)  {
        return (nums[0]);
    } else {
        return 0;
    }
}
console.log(sumFirstPenultimate([]));
console.log(sumFirstPenultimate([1]));
console.log(sumFirstPenultimate([1, 2, 3]));
console.log(sumFirstPenultimate([1, 1]));
console.log(sumFirstPenultimate([1, 1, 1, 1]));
console.log(sumFirstPenultimate([1, 2, 3, 4]));
console.log('')

//6)Modify and return the given HashMap as follows: if the key "a" has a value, set the key "b"
//to have that value, and set the key "a" to have the value "". Basically "b" is a bully,
//taking the value of "a".

function mapBully(map) {
    if ("a" in map) {
        map["b"] = map["a"];
        map["a"] = "";
    }
    return map;
}

console.log(mapBully({"b":"dirt", "a":"candy"}));
console.log(mapBully({"a":"candy"}));
console.log(mapBully({"b":"carrot", "c": "meh", "a":"candy"}));
console.log('')

//7)Modify and return the given HashMap as follows: if the key "a" has a value, set the key
//"b" to have that same value. In all cases remove the key "c", leaving the rest of the
//map unchanged.

function mapShare(map) {
    if ("a" in map) {
        map["b"] = map["a"];
    }
//    map.remove("c");
//    mapShare(map).delete("c");    neither of these work yet-need to delete "c"
    return map;
}

console.log(mapShare({"b":"bbb", "c": "ccc", "a": "aaa"}));
console.log(mapShare({"b":"xyc", "c": "ccc"}));
console.log(mapShare({"d":"hi", "c": "meh", "a": "aaa"}));
console.log('')

// 8)Modify and return the given HashMap as follows: for this problem the HashMap may or may
// not contain the "a" and "b" keys. If both keys are present, append their 2 string values
// together and store the result under the key "ab".

function mapAB(map) {
    if (("a" in map) && ("b" in map)) {
        temp = map["a"] + map["b"];
        map["ab"] =temp;
    }

    return map;
}

console.log(mapAB({"b":"bbb", "c": "ccc", "a": "aaa"}));
console.log(mapAB({"b":"xyc", "c": "ccc"}));
console.log(mapAB({"d":"hi", "c": "meh", "a": "aaa"}));
console.log('')

// 9)Given an ArrayList of strings, return a HashMap containing a key for every different string
// in the ArrayList, and the value is that string's length.
// string.length = length

function wordLen(strings) {
    map = {};
    for (x = 0; x < strings.length; x++) {
        temp = strings[x];
        map[temp] =temp.length;
    }
    return map;
}
console.log(wordLen(["a", "bb", "a", "bb"]));
console.log(wordLen(["this", "and", "that", "and"]));
console.log(wordLen(["code", "code", "code", "bug"]));
console.log('')

// 10)Given an ArrayList of words, return a HashMap> containing keys for every word's first letter.
// The value for the key will be an ArrayList of all words in the list that start with that letter.
//     An empty string has no first letter so don't add a key for it.

function indexWords(strings) {
    map = {};
    for (x = 0; x < strings.length; x++) {
        if(strings[x].trim().length==0)
            continue;
        f = strings[x].substring(0, 1);
        if (f in map) {
            list = map[f];
            list.push(strings[x]);
        } else {
            newList = [];
            newList.push(strings[x]);
            map[f] =newList;
        }
    }
    return map;
    }
console.log(indexWords(["aardvark", "apple", "zamboni", "phone"]));
console.log(indexWords(["elephant"]));
console.log(indexWords([]));
console.log(indexWords([""]));
