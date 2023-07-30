export const sortList_inPlace = (list) => {
	list.items.sort((a, b) => {
		const sumA = a.id + a.sortIndex;
		const sumB = b.id + b.sortIndex;
		return sumB - sumA;
	});
};
