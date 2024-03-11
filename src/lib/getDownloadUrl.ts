let url: string = '';
import { supabase } from './supabse';

const fetchUrl = async (type: string) => {
	try {
		let { data, error } = await supabase.from('tbl.urllinks').select('*');
		if (error) throw error;
		data?.map((item: any) => {
			if (item.url_type === type) {
				url = item.url;
			}
		});

		return url;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};

export const downloadFile = (type: string) => {
	fetchUrl(type).then(() => {
		if (url) {
			const link = document.createElement('a');
			link.href = url;
			link.download = 'noteapp';
			link.click();
		}
	});
	return true;
};

export const getDownloadLink = (os: string | undefined) => {
	if (os === 'Windows') {
		downloadFile('windows');
		return true;
	} else if (os === 'Android' || os === 'Linux') {
		downloadFile('android');
		return true;
	} else {
		return false;
	}
};
