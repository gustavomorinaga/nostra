/**
 * Executes an array of promises in parallel.
 *
 * @param promises - An array of promises to execute.
 * @returns A promise that resolves to an array of results from the executed promises.
 */
export const executeParallel = async <T>(promises: Array<T>): Promise<Array<T>> =>
	await Promise.all(promises.map((promise) => new Promise<T>((resolve) => resolve(promise))));
