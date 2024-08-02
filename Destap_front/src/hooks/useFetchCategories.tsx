import { useState, useEffect } from "react";

const useFetchCategories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getCategories = async () => {
			try {
				const baseUrl = process.env.NEXT_PUBLIC_API_URL;
				const res = await fetch(`${baseUrl}api/category?limit=10&offset=0`);
				if (!res.ok) {
					throw new Error(`Failed to fetch data: Server responded with a status of ${res.status}`);
				}
				const data = await res.json();
				setCategories(data);
			} catch (err) {
				console.error("Error fetching categories:", err.message);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		getCategories();
	}, []);

	return { categories, loading, error };
};

export default useFetchCategories;