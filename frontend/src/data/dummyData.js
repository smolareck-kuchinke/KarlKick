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

export const leaderboardTop10 = [
  { rank: 1, name: 'Marcus Vane', points: 15420, trend: 'up' },
  { rank: 2, name: 'Sarah Chen', points: 14980, trend: 'down' },
  { rank: 3, name: 'Jordan Knight', points: 13750, trend: 'same' },
  { rank: 4, name: 'Alex Morgan', points: 13120, trend: 'up', isCurrentUser: true },
  { rank: 5, name: 'Elena Rossi', points: 12480, trend: 'down' },
  { rank: 6, name: 'David Miller', points: 11960, trend: 'up' },
  { rank: 7, name: 'Priya Nair', points: 11340, trend: 'same' },
  { rank: 8, name: 'Tom Becker', points: 10870, trend: 'down' },
  { rank: 9, name: 'Lucas Silva', points: 10210, trend: 'up' },
  { rank: 10, name: 'Nina Fischer', points: 9840, trend: 'same' },
]

export const currentLeague = {
  name: "Karl's Bundesliga",
  inviteCode: 'KARL2026',
}

export const friendsList = [
  { id: 1, name: 'Jordan Knight', club: 'Liverpool', isOnline: true },
  { id: 2, name: 'Elena Rossi', club: 'Real Madrid', isOnline: false },
  { id: 3, name: 'David Miller', club: 'Bayern', isOnline: true },
  { id: 4, name: 'Priya Nair', club: 'Arsenal', isOnline: false },
  { id: 5, name: 'Tom Becker', club: 'Borussia Dortmund', isOnline: true },
]

export const userProfile = {
  fullName: 'Alex Morgan',
  favoriteClub: 'Manchester City',
  memberSince: 'August 2023',
  points: 13120,
  ranking: 4,
  totalPredictions: 128,
  correctPredictions: 87,
}

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
