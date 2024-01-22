console.log('%c Přednost operátorů ', 'background:black;color:yellow;');

// V případě, že máme výraz, který obsahuje více operátorů,
// tak může záležet na pořadí, v jakém se operátory vyhodnocují

// Dokumentace s prioritou operátorů:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

// Některé operátory se vyhodnocují zleva doprava (většina),
// ale některé zprava doleva

// Přednost matematických operátorů
// Porovnávání a matematické operátory
// Exponent - příklad operátoru zprava doleva
// Závorky - nejvyšší priorita
// Přiřazení - zprava doleva, skoro nejnižší priorita
