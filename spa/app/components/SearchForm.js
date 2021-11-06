export function SearchForm() {
	const $Form = document.createElement("form"),
		$input = document.createElement("input");

	$Form.classList.add("search-form");
	$input.name = "search";
	$input.type = "search";
	$input.placeholder = "Buscar...";

	$Form.appendChild($input);

	return $Form;
	// `<h2>Formulario de búsqueda</h2>`;
}
