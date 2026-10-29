import { LocationType } from '@prisma/client';

export class EventTypeResponseDto {
  id!: string;
  coachId!: string;
  title!: string;
  description!: string | null;
  durationMinutes!: number;
  locations!: LocationType[];
  /** Whole HUF amount. Null means no price is shown at all; see EventType.price. */
  price!: number | null;
  position!: number;
  isActive!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
