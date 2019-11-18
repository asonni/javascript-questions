// Airport Connections

// You are given a list of airports (three-letter codes like 'JFK'), a list of routes (one way flights from one airport to another) and a starting airport.  Write a function that returns the minimum number of airport connections (one-way flights) that need to be added in order for someone to be able to reach any airport in the list, starting at the starting airport.  Note that the connections don't have to be direct; it's okay if an airport can only be reached from the starting airport by stopping at other airports first.

// O(a * (a + r) + a + r + alog(a)) time | O(a + r) space - where a is the number of airports and r is the number of routes
function airportConnections(airports, routes, startingAirport) {
  const airportGraph = createAirportGraph(airports, routes);
  const unreachableAirportNodes = getUnreachableAirportNodes(
    airportGraph,
    airports,
    startingAirport
  );
  markUnreachableConnections(airportGraph, unreachableAirportNodes);
  return getMinNumberOfNewConnecions(airportGraph, unreachableAirportNodes);
}

// O(a + r) time | O(a + r) space
function createAirportGraph(airports, routes) {
  const airportGraph = {};
  for (const airport of airports) {
    airportGraph[airport] = new AirportNode(airport);
  }
  for (const route of routes) {
    const [airport, connection] = route;
    airportGraph[airport].connections.push(connection);
  }
  return airportGraph;
}

// O(a + r) time | O(a) space
function getUnreachableAirportNodes(airportGraph, airports, startingAirport) {
  const visitedAirports = {};
  depthFirstTraverseAirports(airportGraph, startingAirport, visitedAirports);

  const unreachableAirportNodes = [];
  for (const airport of airports) {
    if (airport in visitedAirports) continue;
    const airportNode = airportGraph[airport];
    airportNode.isReachable = false;
    unreachableAirportNodes.push(airportNode);
  }
  return unreachableAirportNodes;
}

function depthFirstTraverseAirports(airportGraph, airport, visitedAirports) {
  if (airport in visitedAirports) return;
  visitedAirports[airport] = true;
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstTraverseAirports(airportGraph, connection, visitedAirports);
  }
}

// O(a * (a + r)) time | O(a) space
function markUnreachableConnections(airportGraph, unreachableAirportNodes) {
  for (const airportNode of unreachableAirportNodes) {
    const { airport } = airportNode;
    const unreachableConnections = [];
    depthFirstAddUnreachableConnections(
      airportGraph,
      airport,
      unreachableConnections,
      {}
    );
    airportNode.unreachableConnections = unreachableConnections;
  }
}

function depthFirstAddUnreachableConnections(
  airportGraph,
  airport,
  unreachableConnections,
  visitedAirports
) {
  if (airportGraph[airport].isReachable) return;
  if (airport in visitedAirports) return;
  visitedAirports[airport] = true;
  unreachableConnections.push(airport);
  const { connections } = airportGraph[airport];
  for (const connection of connections) {
    depthFirstAddUnreachableConnections(
      airportGraph,
      connection,
      unreachableConnections,
      visitedAirports
    );
  }
}

// O(alog(a) + a + r) time | O(1) space
function getMinNumberOfNewConnections(airportGraph, unreachableAirportNodes) {
  unreachableAirportNodes.sort(
    (a1, a2) =>
      a2.unreachableConnections.length - a1.unreachableConnections.length
  );

  let numberOfNewConnections = 0;
  for (const airportNode of unreachableAirportNodes) {
    if (airportNode.isReachable) continue;
    numberOfNewConnections++;
    for (const connection of airportNode.unreachableConnections) {
      airportGraph[connection].isReachable = true;
    }
  }
  return numberOfNewConnections;
}

class AirportNode {
  constructor(airport) {
    this.airport = airport;
    this.connections = [];
    this.isReachable = true;
    this.unreachableConnections = [];
  }
}
