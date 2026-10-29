import type { EmailBrandPalette } from '../../notifications/templates/BookingEmail.js';

export class SettingsResponseDto {
  coachId!: string;
  businessAddress!: string;
  cancellationNoticeHours!: number;
  businessTimezone!: string;
  /** Null means this coach hasn't verified a Resend domain yet -- see Settings.emailFrom. */
  emailFrom!: string | null;
  /** Null falls back to Coach.name -- see Settings.brandName. */
  brandName!: string | null;
  /** Null omits the tagline line entirely -- see Settings.brandTagline. */
  brandTagline!: string | null;
  /** Null falls back to the default email palette -- see Settings.emailBrandPalette. */
  emailBrandPalette!: EmailBrandPalette | null;
  updatedAt!: Date;
}
