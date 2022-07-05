let tree = [
    {
        "title": "文书",
        "key": "文书",
        "value": "文书",
        "fullValue": null,
        "details": null,
        "children": [
            {
                "title": "公文",
                "key": "公文",
                "value": "公文",
                "fullValue": null,
                "details": null,
                "children": [
                    {
                        "title": "综合",
                        "key": "综合",
                        "value": "综合",
                        "fullValue": "文书-公文-综合",
                        "details": null,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "title": "rule\uD83C\uDF88",
        "key": "rule\uD83C\uDF88",
        "value": "rule\uD83C\uDF88",
        "fullValue": null,
        "details": null,
        "children": [
            {
                "title": "rule02",
                "key": "rule02",
                "value": "rule02",
                "fullValue": null,
                "details": null,
                "children": [
                    {
                        "title": "rule03",
                        "key": "rule03",
                        "value": "rule03",
                        "fullValue": "rule\uD83C\uDF88-rule02-rule03",
                        "details": null,
                        "children": []
                    }
                ]
            }
        ]
    }
]

/**
 * 
 * @param {*} tree 树形结构数据
 * @param {*} func 判断节点对象是否符合条件
 * @returns 目标节点对象
 */
function treeFind(tree, func) {
    for (const data of tree) {
        if (func(data)) return data;
        if (data.children) {
            const res = treeFind(data.children, func)
            if (res) return res;
        }
    }
    return null;
}

const result = treeFind(tree, (data) => data.key === '综合')
console.log(result);
