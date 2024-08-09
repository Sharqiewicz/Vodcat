export function getScaleColor(points: number): string {
  if (points < 15) {
    return '#90be6d';
  }
  if (points < 25) {
    return '#f9c74f';
  }
  if (points < 34) {
    return '#f9844a';
  }
  if (points < 48) {
    return '#f3722c';
  }
  return '#f94144';
}
