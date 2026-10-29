import type {
  BookingStatus,
  CancelledBy,
  CoachRole,
  LocationType,
} from '@prisma/client';
import { EventTypeResponseDto } from '../../event-types/dto/event-type-response.dto.js';

// Mirrors the Coach relation as it actually reaches the response body --
// passwordHash is stripped globally by StripPasswordHashInterceptor before
// this shape is serialized, so it's deliberately left out here too.
export class BookingCoachResponseDto {
  id!: string;
  email!: string;
  name!: string;
  preferredLocale!: string;
  role!: CoachRole;
  createdAt!: Date;
  updatedAt!: Date;
  sessionsRevokedAt!: Date | null;
  frontendUrl!: string | null;
}

export class BookingResponseDto {
  id!: string;
  eventTypeId!: string;
  coachId!: string;
  startAt!: Date;
  endAt!: Date;
  location!: LocationType;
  clientName!: string;
  clientEmail!: string;
  clientPhone!: string;
  clientNote!: string | null;
  locale!: string;
  status!: BookingStatus;
  cancelledBy!: CancelledBy | null;
  cancellationReason!: string | null;
  manageToken!: string;
  googleEventId!: string | null;
  meetLink!: string | null;
  originUrl!: string | null;
  createdAt!: Date;
  updatedAt!: Date;
  eventType!: EventTypeResponseDto;
  coach!: BookingCoachResponseDto;
}
