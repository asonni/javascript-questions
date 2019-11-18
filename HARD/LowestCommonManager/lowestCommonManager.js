// Lowest Common Manager

// You're given three inputs, all of whicha re instances of a class that have a "directReports" property pointing to their direct reports.  The first input is the top manager in an organizational chart (i.e. the only instance that is not anybody else's direct report), and the other two inputs are reports in the organizational chart.  Write a function that returns the lowest common manager to the two reports.

// O(n) time | O(d) space - where n is the number of people in the org and d is the depth (height) of the org chart
function getLowestCommonManager(topManager, reportOne, reportTwo) {
  return getOrgInfo(topManager, reportOne, reportTwo).lowestCommonManager;
}

function getOrgInfo(manager, reportOne, reportTwo) {
  let numImportantReports = 0;
  for (const directReport of manager.directReports) {
    const orgInfo = getOrgInfo(directReport, reportOne, reportTwo);
    if (!!orgInfo.lowestCommonManager) return orgInfo;
    numImportantReports += orgInfo.numImportantReports;
  }
  if (manager === reportOne || manager === reportTwo) numImportantReports++;
  const lowestCommonManager = numImportantReports === 2 ? manager : null;
  return { lowestCommonManager, numImportantReports };
}
