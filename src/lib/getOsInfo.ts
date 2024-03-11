export const getOSInfo = () => {
	const userAgent = navigator.userAgent;
	if (userAgent.indexOf('Win') !== -1) {
		return 'Windows';
	} else if (userAgent.indexOf('Mac') !== -1) {
		return 'macOS';
	} else if (userAgent.indexOf('Linux') !== -1) {
		return 'Linux';
	} else if (userAgent.indexOf('Android') !== -1) {
		return 'Android';
	} else if (userAgent.indexOf('iOS') !== -1) {
		return 'iOS';
	}
};
