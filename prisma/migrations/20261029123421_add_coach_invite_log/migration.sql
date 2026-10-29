-- CreateTable
CREATE TABLE "CoachInviteLog" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "frontendUrl" TEXT NOT NULL,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CoachInviteLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "CoachInviteLog_email_idx" ON "CoachInviteLog"("email");
