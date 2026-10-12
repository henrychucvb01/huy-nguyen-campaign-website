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
  {
    name: 'California Teachers Association (CTA)',
    logo: '/images/endorsements/california-teachers-association-primary-signature.png',
    type: 'organization',
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
  {
    name: 'Uduak-Joe Ntuk',
    title: 'President, Long Beach City College Board of Trustees',
    type: 'individual',
  },
  {
    name: 'Dr. Ennette Morton',
    title: 'Vice President, Long Beach City College Board of Trustees',
    type: 'individual',
  },
  {
    name: 'Tunua Thrash-Ntuk',
    title: 'Long Beach City Councilmember, District 8',
    type: 'individual',
  },
  {
    name: 'Trisha Murakawa',
    title: 'Vice President, El Camino Community College Board of Trustees',
    type: 'individual',
  },
  {
    name: 'Patrice Marshall McKenzie',
    title: 'Board Member, Pasadena Unified School District, District 5',
    type: 'individual',
  },
  {
    name: 'Tara Riggi',
    title: 'President, California Heights Neighborhood Association; Long Beach City Council District 5 Candidate',
    type: 'individual',
  },
  {
    name: 'Rae Gabelich',
    title: 'Former Long Beach City Councilmember',
    type: 'individual',
  },
  {
    name: 'Jerry L. Shultz',
    title: 'Former Long Beach City Councilmember; Former Long Beach Unified School District Board Member',
    type: 'individual',
  },
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
