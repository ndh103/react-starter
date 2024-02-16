export type QueryTaskRequest = {
	limit: number;
	offset: number;
	sort: {
		field: string;
		order: string;
	};
};
