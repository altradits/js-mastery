export function examGrader(exercises, passingGrade = 60) {
  if (!Array.isArray(exercises) || exercises.length === 0) {
    return { average: 0, passed: false, grade: 'F', passedCount: 0 };
  }
  const totalWeight = exercises.reduce((sum, e) => sum + (e.weight || 1), 0);
  const weightedScore = exercises.reduce((sum, e) => sum + (e.score * (e.weight || 1)), 0);
  const average = Math.round((weightedScore / totalWeight) * 100) / 100;
  const passed = average >= passingGrade;
  let grade = 'F';
  if (average >= 90) grade = 'A';
  else if (average >= 80) grade = 'B';
  else if (average >= 70) grade = 'C';
  else if (average >= 60) grade = 'D';

  const passedCount = exercises.filter(e => e.score >= passingGrade).length;
  return { average, passed, grade, passedCount };
}
