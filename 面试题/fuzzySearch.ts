function getMatchStrings(input: string, keywords: string[]): string[] {
	const res: string[] = [];

	keywords.forEach(keyword => {
		let matchIndex: number = 0;
		const len: number = keyword.length;
		let flag: boolean = false;

		for (let i = 0; i < input.length; i++) {
			const char = input[i];
			const index = keyword.slice(matchIndex, len).indexOf(char);

			if (index === -1) {
				flag = false;
				break;
			}
			matchIndex = index;
			flag = true;
		}

		flag && res.push(keyword);
	});

	return res;
}

const res = getMatchStrings("el", ["else", "easdal", "eqqq", "lss", "lqqe", "lqqedadl"]);
