var postorder = function (root) {

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
    let result = []
    function traverse(node) {
        if (node) {
            for (let child of node.children) {
                traverse(child)
            }
            result.push(node.val)
        }
[1,null,3,2,4,null,5,6]
[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
[5,6,3,2,4,1]
[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
[5,6,3,2,4,1]
[2,6,14,11,7,3,12,8,4,13,9,10,5,1]
[
