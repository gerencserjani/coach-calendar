import { IsIn, IsOptional, IsString } from 'class-validator';

export const STATS_RANGES = ['7d', '30d', '90d', 'all'] as const;
export type StatsRange = (typeof STATS_RANGES)[number];

export class QueryCoachStatsDto {
  @IsOptional()
  @IsString()
  coachId?: string;

  @IsOptional()
  @IsIn(STATS_RANGES)
  range?: StatsRange;
}
