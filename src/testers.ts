const testers = [
    {
        name: 'Jacek',
        languages: ['JavaScript', 'TypeScript', 'Java', 'Groovy']
    },
    { name: 'Rafał', languages: ['JavaScript', 'TypeScript'] },
    { name: 'Michał', languages: ['JavaScript', 'TypeScript'] },
    { name: 'Jarek', languages: ['JavaScript', 'Other'] },
    { name: 'Kamila', languages: ['Every'] }
];

function getTestersByLanguage(language: string) {
    return testers.filter(tester => tester.languages.includes(language));
}

export { getTestersByLanguage };