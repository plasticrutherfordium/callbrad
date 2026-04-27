export const iappCredentials = ['CIPP/E', 'CIPP/US', 'CIPT', 'CIPM', 'FIP'] as const;

export const workspacePackages = [
  {
    name: 'Essential',
    price: '€800',
    billing: 'one-off',
    summary: 'A practical starting setup for lean teams that need connected GDPR records and clearer ownership.',
  },
  {
    name: 'Operational',
    price: '€1,500',
    billing: 'one-off',
    summary: 'A deeper implementation for teams that need broader operational structure around privacy work.',
  },
  {
    name: 'Growth',
    price: '€3,000',
    billing: 'one-off',
    summary: 'A broader rollout for teams that need a more mature workspace from the start.',
  },
] as const;

export const dpoPackages = [
  {
    name: 'Essential',
    price: '€300',
    billing: '/month',
    summary: 'For teams that need a lean monthly DPO structure with clear baseline support.',
    points: [
      '1 x 30 min monthly sync call',
      'Yearly high-level GDPR gap analysis',
      'Basic asynchronous support via email',
      'Appointed DPO for 1 entity in 1 jurisdiction',
    ],
  },
  {
    name: 'Operational',
    price: '€700',
    billing: '/month',
    summary: 'For teams with active privacy work that need regular monthly DPO support.',
    points: [
      '4 hours work/mo.',
      '1 x 30 min monthly sync call',
      'Yearly in-depth GDPR gap analysis',
      'Basic asynchronous support via email and agreed business messaging channels',
      'Appointed DPO for 1 entity in 1 jurisdiction',
    ],
  },
  {
    name: 'Growth',
    price: '€1,200',
    billing: '/month',
    summary: 'For teams that need more monthly capacity, prioritised support, and a clearer action plan.',
    points: [
      '8 hours work/mo.',
      '2 x 30 min monthly sync calls',
      'Yearly in-depth GDPR gap analysis + prioritised action plan',
      'Priority asynchronous support via email and agreed business messaging channels',
      'Priority phone support for urgent privacy matters during business hours',
      'Appointed DPO for 1 entity in 1 jurisdiction',
    ],
  },
] as const;

export const dpoAddOns = [
  {
    name: 'Extra legal entity',
    price: '€150/month',
    summary: 'Add support for an extra legal entity.',
  },
  {
    name: 'Extra jurisdiction coverage',
    price: '€100/month',
    summary: 'Add support for an extra jurisdiction.',
  },
  {
    name: 'Extra support hours',
    price: '€200/hour',
    summary: 'Additional support time outside package scope.',
  },
  {
    name: 'Urgent out-of-hours support',
    price: '€300/hour',
    summary: 'Urgent support outside normal business hours.',
  },
] as const;

export const workspaceBuyerDpoDiscounts = [
  { package: 'DPO Essential', discount: '10% off' },
  { package: 'DPO Operational', discount: '15% off' },
  { package: 'DPO Growth', discount: '20% off' },
] as const;

export const trainingOffer = {
  price: '€17 per employee',
  minimum: 'Minimum 10 people',
  bulkDiscount: '20% discount for 100+ participants',
} as const;
