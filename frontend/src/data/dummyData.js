// Static placeholder data for the Dashboard page.
// This will be replaced by real API calls once the backend is connected.

export const currentUser = {
  name: 'Alex',
}

export const currentMatchday = {
  number: 24,
  competition: 'Premier League',
  totalMatches: 10,
  completedMatches: 3,
  closesIn: '2 days',
}

export const upcomingMatches = [
  {
    id: 1,
    competition: 'Premier League',
    status: 'Live in 2h',
    isLive: false,
    kickoff: '19:45',
    homeTeam: 'Man City',
    homeAbbr: 'MCI',
    awayTeam: 'Liverpool',
    awayAbbr: 'LIV',
  },
  {
    id: 2,
    competition: 'Champions League',
    status: 'Tomorrow',
    isLive: false,
    kickoff: '20:00',
    homeTeam: 'Real Madrid',
    homeAbbr: 'RMA',
    awayTeam: 'Bayern',
    awayAbbr: 'FCB',
  },
  {
    id: 3,
    competition: 'La Liga',
    status: 'Sat 17:30',
    isLive: false,
    kickoff: '17:30',
    homeTeam: 'Barcelona',
    homeAbbr: 'BAR',
    awayTeam: 'Atl. Madrid',
    awayAbbr: 'ATM',
  },
]

export const leaderboardPreview = [
  { rank: 1, name: 'Alex Morgan', points: 14820 },
  { rank: 2, name: 'Marcus Vane', points: 12450 },
  { rank: 3, name: 'Sarah Chen', points: 11980 },
]

export const predictionMatches = [
  {
    id: 1,
    competition: 'Premier League',
    status: 'Sat 15:00',
    homeTeam: 'Arsenal',
    homeAbbr: 'ARS',
    awayTeam: 'Chelsea',
    awayAbbr: 'CHE',
  },
  {
    id: 2,
    competition: 'La Liga',
    status: 'Sun 18:00',
    homeTeam: 'Real Madrid',
    homeAbbr: 'RMA',
    awayTeam: 'Barcelona',
    awayAbbr: 'BAR',
  },
  {
    id: 3,
    competition: 'Bundesliga',
    status: 'Sat 18:30',
    homeTeam: 'Bayern',
    homeAbbr: 'FCB',
    awayTeam: 'Dortmund',
    awayAbbr: 'BVB',
  },
  {
    id: 4,
    competition: 'Serie A',
    status: 'Sun 20:45',
    homeTeam: 'Juventus',
    homeAbbr: 'JUV',
    awayTeam: 'Inter',
    awayAbbr: 'INT',
  },
  {
    id: 5,
    competition: 'Champions League',
    status: 'Tue 21:00',
    homeTeam: 'Man City',
    homeAbbr: 'MCI',
    awayTeam: 'PSG',
    awayAbbr: 'PSG',
  },
]
