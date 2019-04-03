import { getTestersByLanguage } from "../testers";

test('Finds tester by his laguage knowledge', () => {
	const result = getTestersByLanguage('JavaScript');
	expect(result).toEqual([
		{
			name: 'Jacek',
			languages: ['JavaScript', 'TypeScript', 'Java', 'Groovy']
		},
		{ name: 'Rafał', languages: ['JavaScript', 'TypeScript'] },
		{ name: 'Michał', languages: ['JavaScript', 'TypeScript'] },
		{ name: 'Jarek', languages: ['JavaScript', 'Other'] },
	]);
});