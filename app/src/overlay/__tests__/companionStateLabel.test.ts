import { describe, expect, it } from 'vitest';

import { companionStateLabel } from '../OverlayApp';

describe('companionStateLabel', () => {
  it.each([
    ['listening', '“Listening…”'],
    ['thinking', '“Thinking…”'],
    ['speaking', '“Speaking…”'],
    ['pointing', '“Pointing…”'],
  ])('maps %s to a labeled bubble string', (state, expected) => {
    expect(companionStateLabel(state)).toBe(expected);
  });

  it('wraps unknown state in curly quotes (default branch)', () => {
    expect(companionStateLabel('mystery')).toBe('“mystery”');
    expect(companionStateLabel('idle')).toBe('“idle”');
  });
});
