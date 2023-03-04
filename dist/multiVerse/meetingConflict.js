"use strict";
function findMeetingConflicts(meetings) {
  const parsedMeetings = meetings.map((meeting) => {
    const [startStr, durationStr] = meeting.split(",");
    const start = parseInt(startStr.replace(/\s/g, ""), 10);
    const duration = parseInt(durationStr.replace(/\s/g, ""), 10);
    return { start, end: start + duration };
  });
  const meetingsAsNums = meetings.map((meet) => {
    const [startString, durationString] = meet.split(",");
    const start = Number(startString);
    const duration = Number(durationString);
    return { start, end: start + duration };
  });
  console.log(meetingsAsNums, parsedMeetings);
  parsedMeetings.sort((a, b) => a.start - b.start);
  let conflicts = 0;
  let totalConflictTime = 0;
  let lastEnd = 0;
  for (let i = 0; i < parsedMeetings.length; i++) {
    const currentMeeting = parsedMeetings[i];
    if (currentMeeting.start < lastEnd) {
      conflicts++;
      totalConflictTime += Math.min(
        lastEnd - currentMeeting.start,
        currentMeeting.end - currentMeeting.start
      );
    }
    lastEnd = Math.max(lastEnd, currentMeeting.end);
  }
  if (conflicts === 0) {
    return "good";
  } else {
    return `conflict, ${conflicts}, ${totalConflictTime}`;
  }
}
