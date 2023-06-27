const enum Time {
	MINUTES_IN_HOUR = 60,
	HOURS_IN_DAY=24
}
type TimeString = `${string}:${string}`

const timeStringToNumber = (time: TimeString): number => {
	const timeArr = time.split(':');
	return +timeArr[0] + (Number(timeArr[1]) / Time.MINUTES_IN_HOUR);
};

const getEndHours = (workStartHours: number, workEndHours: number) => ((workEndHours < workStartHours) ? Time.HOURS_IN_DAY + workEndHours : workEndHours);

const isEnoughTime = (startWork: TimeString, endWork: TimeString, startMeet: TimeString, meetTime: number) => {
	const requiredMeetTime = meetTime / Time.MINUTES_IN_HOUR;
	const [workStartHours, workEndHours, meetStartHours] = [startWork,endWork,startMeet].map(timeStringToNumber);
	const meetEndTime = meetStartHours + requiredMeetTime;
	return	(workStartHours <= meetStartHours) && (meetEndTime <= getEndHours(workStartHours, workEndHours));
};

export {isEnoughTime};
export type {TimeString};


