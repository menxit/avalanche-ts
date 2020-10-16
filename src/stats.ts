import * as rpc from "./rpc"

interface OptionsCalculateReward {
  stakedAmount: number;
  durationInMs: number;
  existingSupply?: number;
}

export async function calculateReward(options: OptionsCalculateReward) {
  const stakedAmount = options.stakedAmount || 0;
  const stakingDuration = options.durationInMs || 0;
  let existingSupply = options.existingSupply || 0;
  if (!existingSupply) {
    try {
      existingSupply = await rpc.platformvm.getCurrentSupply({}).then(result => parseInt(result.supply));
    } catch (e) {
      console.error(e);
      existingSupply = 0;
    }
  }
  const maximumStakingDuration = 31_536_000_000;
  const minMintingRate = 100_000;
  const maxSubMinMintingRate = 20_000;
  const percentDenominator = 1_000_000;
  const supplyCap = 720_000_000_000_000_000;

  let adjustedConsumptionRateNumerator = maxSubMinMintingRate * stakingDuration;
  let adjustedMinConsumptionRateNumerator = minMintingRate * maximumStakingDuration;
  adjustedConsumptionRateNumerator += adjustedMinConsumptionRateNumerator;
  let adjustedConsumptionRateDenominator = maximumStakingDuration * percentDenominator;

  let reward = supplyCap - existingSupply;
  reward *= adjustedConsumptionRateNumerator;
  reward *= stakedAmount;
  reward *= stakingDuration;
  reward /= adjustedConsumptionRateDenominator;
  reward /= existingSupply;
  reward /= maximumStakingDuration;

  return Math.floor(reward);
}
