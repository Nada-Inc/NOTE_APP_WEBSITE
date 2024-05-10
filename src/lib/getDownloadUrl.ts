const fetchUrl = async (type) => {
	try {
		let url = '';
		if (type === 'Windows') {
			url =
				'https://github.com/Nada-Inc/NOTE-APP-MONO-REPO/releases/download/1.0.0-alpha-preview/Note.App_0.1.0_x64-setup.exe';
		} else if (type === 'android') {
			url =
				'https://github.com/Nada-Inc/NOTE-APP-MONO-REPO/releases/download/1.0.0-alpha-preview/noteapp-android-2b1bbba83231.apk';
		}
		return url;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
};

const downloadFile = async (type) => {
	try {
		const url = await fetchUrl(type);
		if (url) {
			const link = document.createElement('a');
			link.href = url;
			link.download = 'noteapp';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		}
	}
};

export const getDownloadLink = (os) => {
	if (os === 'Windows') {
		downloadFile('Windows');
		return true;
	} else if (os === 'Android' || os === 'Linux') {
		downloadFile('android');
		return true;
	} else {
		return false;
	}
};
