console.log('%c Implicitní přetypování ', 'background:black;color:yellow;');

// Type coersion - implicitní přetypování
// Automatická konverze typů, aniž bychom explicitně řekli
// Nejběžněji nastává ve chvíli,
// kdy operátorem spojíme hodnoty dvou různých typů

// 3 + '2'
// 3 + Number('2')
// 3 * '2'
// 3 + null
// 3 + true
// 3 + false
// 3 + undefined → NaN