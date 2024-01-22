console.log('%c Primitivní vs. referenční datové typy ', 'background:black;color:yellow;');

// Opáčko:
// - primitivní datové typy:
//   number, string, boolean, null, undefined, bigint, symbol
// - referenční datové typy:
//   objekty, pole, funkce

// Rozdíl mezi primitivními a referenčními datovými typy:
// - jak jsou uložené v paměti počítače

// Primitivní typy
// - uložené přímo v zásobníku (stack)

// Referenční typy
// - skutečná hodnota uložená v hromadě (heap)
// - v zásobníku (stack) je odkaz (reference)
// - když vytvoříme novou proměnnou a přiřadíme
//   do ní proměnnou obsahující referenční typ,
//   uloží se do nové proměnné pouze odkaz
// - obě proměnné nyní odkazují na stejné místo
// - POZOR! když potom změníme např. vlastnost objektu
//   uloženého v jedné proměnné, změní se i v druhé
