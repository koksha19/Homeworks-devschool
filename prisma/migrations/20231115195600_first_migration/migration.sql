-- CreateTable
CREATE TABLE "guitarPlayer" (
    "player_id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,

    CONSTRAINT "guitarPlayer_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "Guitar" (
    "guitar_id" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "floydRose" BOOLEAN NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Guitar_pkey" PRIMARY KEY ("guitar_id")
);

-- CreateTable
CREATE TABLE "Band" (
    "band_id" TEXT NOT NULL,
    "memberFirstName" TEXT NOT NULL,
    "memberLastName" TEXT,
    "producerId" TEXT NOT NULL,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("band_id")
);

-- CreateTable
CREATE TABLE "Producer" (
    "producer_id" TEXT NOT NULL,
    "fistName" TEXT NOT NULL,
    "lastName" TEXT,

    CONSTRAINT "Producer_pkey" PRIMARY KEY ("producer_id")
);

-- CreateTable
CREATE TABLE "soloConcert" (
    "concert_id" TEXT NOT NULL,
    "bandId" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "soloConcert_pkey" PRIMARY KEY ("concert_id")
);

-- CreateTable
CREATE TABLE "_BandToguitarPlayer" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "guitarPlayer_firstName_lastName_key" ON "guitarPlayer"("firstName", "lastName");

-- CreateIndex
CREATE UNIQUE INDEX "soloConcert_bandId_key" ON "soloConcert"("bandId");

-- CreateIndex
CREATE UNIQUE INDEX "_BandToguitarPlayer_AB_unique" ON "_BandToguitarPlayer"("A", "B");

-- CreateIndex
CREATE INDEX "_BandToguitarPlayer_B_index" ON "_BandToguitarPlayer"("B");

-- AddForeignKey
ALTER TABLE "Guitar" ADD CONSTRAINT "Guitar_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "guitarPlayer"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Band" ADD CONSTRAINT "Band_producerId_fkey" FOREIGN KEY ("producerId") REFERENCES "Producer"("producer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "soloConcert" ADD CONSTRAINT "soloConcert_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("band_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BandToguitarPlayer" ADD CONSTRAINT "_BandToguitarPlayer_A_fkey" FOREIGN KEY ("A") REFERENCES "Band"("band_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BandToguitarPlayer" ADD CONSTRAINT "_BandToguitarPlayer_B_fkey" FOREIGN KEY ("B") REFERENCES "guitarPlayer"("player_id") ON DELETE CASCADE ON UPDATE CASCADE;
