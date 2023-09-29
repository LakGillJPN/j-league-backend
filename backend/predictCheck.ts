const homeCheck = (home : number, away : number) => {
  if (home > away) {
    return true;
  }
  if (home < away) {
    return false;
  } else {
    return null;
  }
};

const awayCheck = (home: number, away: number) => {
  if (home < away) {
    return true;
  }
  if (home > away) {
    return false;
  } else {
    return null;
  }
};

export {homeCheck, awayCheck}