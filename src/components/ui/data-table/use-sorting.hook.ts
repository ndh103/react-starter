import { useState } from "react";

export function useSorting(initialField = "", initialOrder = "ASC") {
	const initialSort = initialField
		? { id: initialField, desc: initialOrder === "DESC" }
		: null;

	const [sorting, setSorting] = useState(initialSort ? [initialSort] : []);

	return {
		// 🔽 Table sorting state
		sorting,
		onSortingChange: setSorting,
		// 🔽 API sorting parameters
		order: !sorting.length ? initialOrder : sorting[0].desc ? "DESC" : "ASC",
		field: sorting.length ? sorting[0].id : initialField,
	};
}
