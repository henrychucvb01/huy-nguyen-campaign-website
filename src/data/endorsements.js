export const endorsements = [
  {
    name: 'Teamsters Local 572',
    logo: '/images/endorsements/teamsters-local-572.png',
    type: 'organization',
    featured: true,
  },
  {
    name: 'Teamsters Joint Council 42',
    logo: '/images/endorsements/teamsters-joint-council-42.png',
    type: 'organization',
    featured: true,
  },
  {
    name: 'Long Beach City College Faculty Association / CTA',
    logo: '/images/endorsements/lbcc-faculty-association-light.png',
    type: 'organization',
    featured: true,
  },
  { name: 'VoteVets', logo: '/images/endorsements/votevets.png', type: 'organization' },
  {
    name: 'United Steelworkers Local 675',
    logo: '/images/endorsements/usw-local-675.png',
    type: 'organization',
  },
  {
    name: 'United Steelworkers Los Angeles/Orange Counties Legislative Education Committee',
    logo: '/images/endorsements/usw-la-oc-lec.png',
    type: 'organization',
  },
  {
    name: 'Sprinkler Fitters Local 709',
    logo: '/images/endorsements/sprinkler-fitters-709.jpg',
    type: 'organization',
  },
  {
    name: 'Painters and Allied Trades District Council 36',
    logo: '/images/endorsements/district-council-36.jpg',
    type: 'organization',
  },
  {
    name: 'New American Leaders Action Fund',
    logo: '/images/endorsements/new-american-leaders-action-fund.png',
    type: 'organization',
  },
  {
    name: 'Faculty Association of California Community Colleges',
    logo: '/images/endorsements/faccc.png',
    type: 'organization',
  },
  { name: 'Uduak-Joe Ntuk', type: 'individual' },
  { name: 'Ennette Morton', type: 'individual' },
  { name: 'Tunua Thrash-Ntuk', type: 'individual' },
  { name: 'Trisha Murakawa', type: 'individual' },
  { name: 'Patrice McKenzie', type: 'individual' },
]

export const featuredOrganizations = endorsements.filter(
  (endorsement) => endorsement.type === 'organization' && endorsement.featured,
)

export const organizationEndorsements = endorsements.filter(
  (endorsement) => endorsement.type === 'organization',
)

export const individualEndorsements = endorsements.filter(
  (endorsement) => endorsement.type === 'individual',
)
