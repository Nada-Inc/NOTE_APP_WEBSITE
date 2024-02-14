import { supabase } from '../../lib/supabase';

export const setBlogData = async (blogData) => {
	try {
		const { data, error } = await supabase.from('tbl.blogs').insert([
			{
				title: blogData.title,
				content: blogData.content,
				is_draft: blogData.is_draft,
				is_published: blogData.is_published
			}
		]);

		if (error) {
			console.error(error);
			return { success: false, message: 'Insertion failed', error };
		} else {
			return { success: true, message: 'Insertion successful', data };
		}
	} catch (error) {
		console.error(error);
		return { success: false, message: 'An error occurred', error };
	}
};

export const getBlogs = async () => {
	try {
		let { data, error } = await supabase.from('tbl.blogs').select('*');
		if (error) {
			console.error(error);
			return { success: false, message: 'failed', error };
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};
