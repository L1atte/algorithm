/*
 * @Author: Latte
 * @Date: 2021-10-19 08:50:09
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-19 09:23:35
 * @FilePath: \algorithm\160. 相交链表.js
 */
// 哈希表
/**
 * 先遍历一遍链表 A，用哈希表把每个节点都记录下来(注意要存节点引用而不是节点值)。
 * 再去遍历链表 B，找到在哈希表中出现过的节点即为两个链表的交点。
 */
let getInterSectionNode = function (headA, headB) {
	if (!headA || !headB) return null;

	const hashMap = new Map();
	let pA = headA;
	while (pA) {
		hashMap.set(pA, 1);
		pA = pA.next;
	}

	let pB = headB;
	while (pB) {
		if (hashMap.has(pB)) return pB;
		pB = pB.next;
	}
	return null;
};

// 双指针
/**
 * 让pA遍历完链表 A 之后开始遍历链表 B，让pB遍历完链表 B 之后开始遍历链表 A，这样相当于将两条链表连接在一起
 * 然后当pA === pB时，此时 pA (pB)指向的节点即为交点
 */
let getInterSectionNode1 = function (headA, headB) {
	if (!headA || !headB) return null;

	let pA = headA,
		pB = headB;

	while (pA !== pB) {
		pA = pA === null ? headB : pA.next;
		pB = pB === null ? headA : pB.next;
	}
	return pA;
};
