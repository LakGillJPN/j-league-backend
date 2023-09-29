import { homeCheck, awayCheck } from "../../frontend/src/utils/predictCheck";

describe('homeCheck should come up with the correct amount', () => {
  it('should respond with true if the home team wins ', async () => {
    expect(homeCheck(2,1)).toBe(true);
  })

  it('should respond with false if the home team loses ', async () => {
    expect(homeCheck(1,3)).toBe(false);
  })

  it('should respond with null for a draw ', async () => {
    expect(homeCheck(2,2)).toBe(null);
  })
});

describe('awayCheck should come up with the correct amount', () => {
  it('should respond with true if the away team wins ', async () => {
    expect(awayCheck(1,4)).toBe(true);
  })

  it('should respond with false if the away team loses ', async () => {
    expect(awayCheck(1,0)).toBe(false);
  })

  it('should respond with null for a draw ', async () => {
    expect(awayCheck(2,2)).toBe(null);
  })
});
