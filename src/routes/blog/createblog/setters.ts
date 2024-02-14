import { supabase } from '../../../lib/supabase';

export const setBlogData = async (blogData) => {
	console.log(blogData);

	try {
		await supabase
			.from('tbl.blogs')
			.insert([
				{
					title: blogData.title,
					content: blogData.content,
					is_draft: blogData.is_draft,
					is_publish: blogData.is_publish
				}
			])
			.select();
	} catch (error) {
		console.error(error);
	}
};
