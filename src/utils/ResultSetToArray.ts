export function ResultSetToArray(resultSet: any): string[] {
	return resultSet.toString().replace('[', '').replace(']', '').split(',');
}
